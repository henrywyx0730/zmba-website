import type { MetadataRoute } from "next";

const baseUrl = "https://zmbasketball.org";

const publicPaths = [
  "/",
  "/about",
  "/games",
  "/people",
  "/rules",
  "/rules/2025-26",
  "/rules/code-of-conduct-2025",
  "/media",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map((path) => ({ url: new URL(path, baseUrl).toString() }));
}
