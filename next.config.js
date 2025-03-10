/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

// /** @type {import("next").NextConfig} */
// const config = {
//   images: {
//     remotePatterns : [
//       // {hostname: "utfs.io"},
//       {hostname: "9ch4okkejz.ufs.sh"},
//     ]
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true
//   },
//   experimental: {
//     serverActions: {
//       bodySizeLimit: "4mb",
//       allowedOrigins: ["https://t3-gallery-gamma-mocha.vercel.app/"]
//     }
//   }
// };

// export default config;


/** @type {import("next").NextConfig} */
const coreConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Specify the protocol
        hostname: "9ch4okkejz.ufs.sh", // Your image hostname
        pathname: "/**", // Allow all paths
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites(){
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ]
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
      allowedOrigins: ["https://t3-gallery-gamma-mocha.vercel.app/"],
    },
  },
};

import {withSentryConfig} from '@sentry/nextjs';

const config = withSentryConfig(
  coreConfig,
  {
    // For all available options, see:
    // https://www.npmjs.com/package/@sentry/webpack-plugin#options

    org: "jerry-j6",
    project: "t3_gallery",

    // Only print logs for uploading source maps in CI
    silent: !process.env.CI,

    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Automatically annotate React components to show their full name in breadcrumbs and session replay
    reactComponentAnnotation: {
      enabled: true,
    },

    // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // This can increase your server load as well as your hosting bill.
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    tunnelRoute: "/monitoring",

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  }
);

export default config;


// // Injected content via Sentry wizard below

// const { withSentryConfig } = require("@sentry/nextjs");

// module.exports = withSentryConfig(
//   module.exports,
  
// );
