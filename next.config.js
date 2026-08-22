/** @type {import('next').NextConfig} */
if (typeof globalThis !== 'undefined' && typeof globalThis.localStorage !== 'undefined' && typeof globalThis.localStorage.getItem !== 'function') {
  delete globalThis.localStorage;
}

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

