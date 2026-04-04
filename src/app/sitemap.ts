import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mtunapesa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/contact",
    "/features",
    "/faq",
    "/privacy",
    "/cookies",
    "/terms",
    "/data-deletion",
  ];
  return paths.map((path) => ({
    url: `${base.replace(/\/$/, "")}${path === "" ? "/" : path}`,
    lastModified: new Date(),
  }));
}
