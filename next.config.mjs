/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: works on Vercel and any static host.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
