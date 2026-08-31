import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "lume";
const basePath = isGithubPages ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH ?? basePath,
  },
  ...(isGithubPages
    ? {
        output: "export" as const,
        trailingSlash: true,
        basePath,
        assetPrefix: basePath,
        images: {
          loader: "custom",
          loaderFile: "./src/image-loader.ts",
        },
      }
    : {
        images: {
          formats: ["image/webp", "image/avif"],
        },
      }),
};

export default withNextIntl(nextConfig);
