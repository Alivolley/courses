/** @type {import('next').NextConfig} */
const nextConfig = {
   basePath: "/hoorad",
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: '**',
         },
         {
            protocol: 'http',
            hostname: '**',
         },
      ],
   },
};

export default nextConfig;
