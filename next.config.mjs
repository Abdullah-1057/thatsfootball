// next.config.mjs
const nextConfig = {
  output: "standalone",
  // experimental: { optimizeCss: true }, // ← remove this line
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
export default nextConfig;
