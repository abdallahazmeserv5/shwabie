import createNextIntlPlugin from 'next-intl/plugin';


/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ]
  },
}

const withNextIntl = createNextIntlPlugin();


export default withNextIntl(nextConfig);
