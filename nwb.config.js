module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'RevExchanger',
      externals: {
        react: 'React'
      }
    }
  },
  webpack: {
    extractText: true
  },
  babel: {
    plugins: ['styled-components'], //'stylus-compiler']
  }
};
