import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90, 95, 100],
  },
  async redirects() {
    return [
      { source: "/contatti", destination: "/prenota", permanent: true },
      { source: "/skin", destination: "/malattie-dermatologiche", permanent: true },
      { source: "/skin/:slug*", destination: "/malattie-dermatologiche", permanent: true },
    ]
  },
}

export default nextConfig
