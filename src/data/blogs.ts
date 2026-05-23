export interface Blog {
  id: number;
  shortTitle: string;
  title: string;
  description: string;
  date: Date;
  readtime: number;
  tech?: string[];
}

export const blogs: Blog[] = [
  {
    id: 1,
    shortTitle: "ai-in-development",
    title: "Usage of AI in software development",
    description: "An analysis on the usage of AI for developers",
    date: new Date(2026, 5, 19),
    readtime: 10,
    tech: ["Codex", "Claude", "Cursor", "Gemini"],
  },
];
