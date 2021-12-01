/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
  },
}
