module.exports = {
  target: 'server',
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/films',
        permanent: true
      }
    ];
  },
  env: {
    ENV_TYPE: process.env.ENV_TYPE
  }
};
