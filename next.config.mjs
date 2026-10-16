/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Keep old links working.
      { source: "/blog_2", destination: "/blog/unity-in-diversity", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/publications.html", destination: "/publications", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/blog.html", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
