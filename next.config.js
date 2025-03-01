/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
      allowedOrigins: ["https://t3-gallery-gamma-mocha.vercel.app/"]
    }
  }
};

export default config;
