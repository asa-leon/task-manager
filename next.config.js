const { withExpo } = require("@expo/next-adapter")
const withImages = require('next-images')

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    "react-native",
    "expo",
    // Add more React Native / Expo packages here...
	"react-native-inset-shadow",
	
  ],
  experimental: {
    forceSwcTransforms: true,
  },
});

module.exports = nextConfig;
