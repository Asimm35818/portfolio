export interface BlogPost {
  id?: number;
  slug: string;
  title: string;
  description: string;
  date: Date;
  readtime: number;
  body: string;
  image?: string;
  tech?: string[];
}

type BlogFrontmatter = {
  id?: number;
  title?: string;
  description?: string;
  date?: string;
  slug?: string;
  image?: string;
  tech?: string[];
};

const rawBlogFiles = import.meta.glob("../content/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function estimateReadTime(body: string) {
  const wordCount = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 200));
}

function parseFrontmatter(raw: string) {
  const frontmatterMatch = raw.match(/^---\s*[\r\n]+([\s\S]*?)\r?\n---\s*[\r\n]+([\s\S]*)$/);

  if (!frontmatterMatch) {
    return { data: {}, content: raw.trim() };
  }

  const frontmatterLines = frontmatterMatch[1]
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const data: BlogFrontmatter = {};

  for (const line of frontmatterLines) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();

    if (key === "title") data.title = value;
    if (key === "ID") data.id = Number(value);
    if (key === "description") data.description = value;
    if (key === "date") data.date = value;
    if (key === "slug") data.slug = value;
    if (key === "image") data.image = value;
    if (key === "Tech") {
      data.tech = value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }
  }

  return {
    data,
    content: frontmatterMatch[2].trim(),
  };
}

function parseBlogFile(filePath: string, raw: string): BlogPost {
  const { data, content } = parseFrontmatter(raw);
  const frontmatter = data as BlogFrontmatter;
  const slug =
    frontmatter.slug ?? filePath.split("/").pop()?.replace(".md", "") ?? "post";
  const date = frontmatter.date ? new Date(frontmatter.date) : new Date();

  return {
    slug,
    id: frontmatter.id,
    title: frontmatter.title ?? slug,
    description: frontmatter.description ?? "",
    date,
    readtime: estimateReadTime(content),
    body: content,
    image: frontmatter.image,
    tech: frontmatter.tech,
  };
}

export const blogs = Object.entries(rawBlogFiles)
  .map(([filePath, raw]) => parseBlogFile(filePath, raw))
  .sort((a, b) => {
    if (a.id != null && b.id != null) return a.id - b.id;
    if (a.id != null) return -1;
    if (b.id != null) return 1;
    return b.date.getTime() - a.date.getTime();
  });

export function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}

export function formatBlogDate(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}
