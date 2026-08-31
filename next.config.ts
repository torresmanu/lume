import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "lume";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isGithubPages
    ? {
        output: "export" as const,
        trailingSlash: true,
        basePath: `/${repositoryName}`,
        images: { unoptimized: true },
      }
    : {
        images: {
          formats: ["image/webp", "image/avif"],
        },
      }),
};

export default withNextIntl(nextConfig);
