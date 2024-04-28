/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/my-app",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
