/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    generateBuildId: async () => {
      // You can, for example, get the latest git commit hash here
      return 'my-build-id'
    },
  }