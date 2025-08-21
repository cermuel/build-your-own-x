import { getData } from "@/services/project.service";
import Navbar from "@/components/Navbar";
import ProjectList from "@/components/ProjectList";

export default async function Home() {
  const {
    items,
    categories: defaultCategories,
    languages: defaultLanguages,
  } = await getData();
  const categories = [
    {
      name: "All Projects",
      value: "",
    },
    ...defaultCategories.map((c) => {
      return { name: c, value: c.toLowerCase() };
    }),
  ];

  const languages = ["", ...defaultLanguages];

  return (
    <div className="w-screen min-h-screen">
      <Navbar />
      <ProjectList
        items={items}
        categories={categories}
        languages={languages}
      />
    </div>
  );
}
