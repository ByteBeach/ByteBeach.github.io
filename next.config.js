/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: isProd ? '/<ByteBeach.github.io>' : '',
    assetPrefix: isProd ? '/<ByteBeach.github.io>' : ''
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = nextConfig


