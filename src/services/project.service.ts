import { Item } from "@/types/services";
import axios from "axios";

export const getData = async (): Promise<{
  items: Item[];
  categories: string[];
  languages: string[];
}> => {
  const data = await axios.get(
    "https://raw.githubusercontent.com/codecrafters-io/build-your-own-x/master/README.md"
  );
  const markdown = data.data;

  const categoryRegex = /#### Build your own `(.+?)`/g;

  const tutorialRegex =
    /\*\s\[\*\*(.+?)\*\*: _(.+?)_\]\((.+?)\)(?: \[video\])?/g;

  const result: Item[] = [];
  const allLanguages = new Set<string>();

  let categoryMatch;
  while ((categoryMatch = categoryRegex.exec(markdown)) !== null) {
    const category = categoryMatch[1];
    const start = categoryMatch.index;
    const end = markdown.indexOf("#### Build your own", start + 1);
    const section = markdown.slice(start, end === -1 ? undefined : end);

    let match;
    while ((match = tutorialRegex.exec(section)) !== null) {
      const [full, languageStr, title, url] = match;

      const languages = languageStr.split("/").map((l) => l.trim());
      languages.forEach((lang) => allLanguages.add(lang));

      const isVideo = /\[video\]$/.test(full);

      result.push({
        category,
        languages,
        title,
        url,
        isVideo,
      });
    }
  }

  const categories: string[] = getCategories(markdown) as string[];
  const languages: string[] = Array.from(allLanguages);

  return { items: result, categories, languages };
};

export const getCategories = (markdown: any) => {
  const categoryRegex = /#### Build your own `(.+?)`/g;
  const categories = new Set<string>();
  let match;

  while ((match = categoryRegex.exec(markdown)) !== null) {
    categories.add(match[1]);
  }

  return Array.from(categories);
};
