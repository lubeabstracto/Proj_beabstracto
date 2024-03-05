// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/l/:path*',
        destination: 'http://localhost:3000/:path*', // Adjust this as needed
      },
    ];
  },
};

export default nextConfig;
