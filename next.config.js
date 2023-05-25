/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  i18n:{
    locales: ['fr', 'en'],
    defaultLocale: 'en',
  },

  webpack(config) {
    config.module.rules.push({
      test: /.svg$/i,
      issuer: /.[jt]sx?$/,
      use: [{loader: '@svgr/webpack', options: {icon:true}}],




  })
  return config
}}

module.exports = nextConfig


