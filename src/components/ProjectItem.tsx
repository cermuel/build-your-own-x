import { Item } from "@/types/services";
import React from "react";
import { FiLink } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";

const ProjectItem = ({ item }: { item: Item }) => {
  const stableNumber =
    300 +
    (Array.from(item.title).reduce((sum, char) => sum + char.charCodeAt(0), 0) %
      201);

  return (
    <div className="h-44 col-span-1 shadow rounded-md border-[#333] border bg-[#222] p-2 flex flex-col">
      <div className="w-full flex justify-end">
        <div className="text-[10px] bg-[#444] p-1 py-0.5 rounded-sm">
          {item.languages[0]}
        </div>
      </div>
      <h1 className="font-semibold mt-1 mb-1.5 text-[15px]">{item.category}</h1>
      <p className="text-[11px] font-medium text-[#ccc]">{item.title}</p>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1">
          <LuUsers size={12} color="#aaa" />
          <span className="text-[10px] text-[#aaa]">
            {stableNumber} Started
          </span>
        </div>
        {item.url && (
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <FiLink className="cursor-pointer" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
