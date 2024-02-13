const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "umer-sagheer.cdn.prismic.io",
        port: "",
        pathname: "/umer-sagheer/**",
      },
    ],
  },
};

module.exports = nextConfig;
