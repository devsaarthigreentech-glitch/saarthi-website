import type { MetadataRoute } from "next";
import { COMPANY, ROUTES } from "@/data/siteContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const priority: Record<string, number> = {
    [ROUTES.home]: 1,
    [ROUTES.greendrive]: 0.9,
    [ROUTES.greenx]: 0.9,
    [ROUTES.greenedge]: 0.9,
    [ROUTES.greenmarine]: 0.7,
    [ROUTES.chfa]: 0.8,
    [ROUTES.sgtos]: 0.8,
    [ROUTES.greenvision]: 0.8,
  };

  const paths = [...Object.values(ROUTES), "/privacy-policy", "/terms-of-service"];

  return paths.map((path) => ({
    url: `${COMPANY.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: priority[path] ?? 0.5,
  }));
}
