"use client";

import { useState } from "react";
import ProjectItem from "@/components/ProjectItem";
import { PiCubeLight } from "react-icons/pi";
import { Item } from "@/types/services";
import { BiChevronDown } from "react-icons/bi";

export default function ProjectList({
  items,
  categories,
  languages,
}: {
  items: Item[];
  categories: { name: string; value: string }[];
  languages: string[];
}) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [showCategories, setShowCategories] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  const filteredByLang = items.filter((item) =>
    selectedLanguage === ""
      ? item.languages
      : item.languages[0].toLowerCase() === selectedLanguage.toLowerCase()
  );
  const filteredItems =
    selectedCategory === ""
      ? filteredByLang
      : filteredByLang.filter(
          (item) =>
            item.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[700px] p-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <PiCubeLight />
          <span className="text-xs font-medium text-[#ccc] capitalize">
            {selectedCategory === "" ? "All Projects" : selectedCategory}
          </span>
        </div>
        <span className="text-xs font-medium text-[#ccc]">
          Matches found ({filteredItems.length})
        </span>
      </div>

      <div className="flex items-center gap-4 w-full justify-start max-w-[700px] px-6">
        <button
          onClick={() => setShowCategories(!showCategories)}
          className="flex items-center text-xs cursor-pointer"
        >
          Categories{" "}
          <BiChevronDown
            size={20}
            className={`${
              !showCategories ? "rotate-90" : ""
            } transition-all duration-300`}
          />
        </button>
        <button
          onClick={() => setShowLanguages(!showLanguages)}
          className="flex items-center text-xs cursor-pointer"
        >
          Languages{" "}
          <BiChevronDown
            size={20}
            className={`${
              !showLanguages ? "rotate-90" : ""
            } transition-all duration-300`}
          />
        </button>
      </div>

      <div
        className={`transition-all duration-300 flex flex-wrap gap-2 px-6 max-w-[700px] h-full ${
          showCategories
            ? "max-h-60 my-4  overflow-y-scroll"
            : "max-h-0  overflow-hidden"
        }`}
      >
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`cursor-pointer px-3 py-1.5 rounded-full text-xs font-medium transition ${
              selectedCategory === cat.value
                ? "bg-blue-500 text-white shadow-md"
                : "bg-[#333] text-[#aaa] hover:bg-[#444]"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div
        className={`transition-all duration-300 my-4 flex flex-wrap gap-2 px-6 max-w-[700px] h-full ${
          showLanguages
            ? "max-h-60 my-4  overflow-y-scroll"
            : "max-h-0  overflow-hidden"
        }`}
      >
        {languages.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedLanguage(cat)}
            className={`cursor-pointer px-3 py-1.5 rounded-full text-xs font-medium transition ${
              selectedLanguage === cat
                ? "bg-blue-500 text-white shadow-md"
                : "bg-[#333] text-[#aaa] hover:bg-[#444]"
            }`}
          >
            {cat === "" ? "All Languages" : cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 w-full max-w-[700px] gap-3 px-6">
        {filteredItems.map((item, index: number) => (
          <ProjectItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
