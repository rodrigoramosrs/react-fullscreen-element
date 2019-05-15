module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'umd_build',
      externals: {
        react: 'React'
      }
    }
  }
}
