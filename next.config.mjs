/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NEXT_OUTPUT_MODE || 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  }
}

export default nextConfig