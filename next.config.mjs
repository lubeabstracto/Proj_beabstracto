// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/l/:path*',
        destination: '/gerador-link-whats-app/:path*', // Adjust this as needed
      },
    ];
  },
};

export default nextConfig;
