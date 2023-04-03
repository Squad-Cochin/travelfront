/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['hare-media-cdn.tripadvisor.com']
  }
};
module.exports = {
  // images: {
  //   dangerouslyAllowSVG: true,
  //   contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  //   domains: ['hare-media-cdn.tripadvisor.com', 'tripadvisor.com']
  // }
  // module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'hare-media-cdn.tripadvisor.com',
          port: '',
          pathname: '/media/**',
        },
      ],
    },
  /*webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }*/
};

module.exports = nextConfig;
