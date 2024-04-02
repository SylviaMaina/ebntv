module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["media.graphassets.com"],
  },
  api: {
    bodyParser: false, // Enable raw body parsing
  },
  experimental: {
    workerThreads: false,
    cpus: 1
  },
};
