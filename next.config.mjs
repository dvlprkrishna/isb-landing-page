/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // loader: "imgix",
    // path: "",
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
