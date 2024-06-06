module.exports = {
  output: 'standalone',
  webpack: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
};
