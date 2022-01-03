const {
  override,
  addWebpackResolve,
  addWebpackModuleRule,
  addPostcssPlugins,
} = require('customize-cra')
const path = require('path')

module.exports = override(
  addWebpackResolve({
    alias: {
      pages: path.resolve(__dirname, 'src/pages/'),
      components: path.resolve(__dirname, 'src/components/'),
      context: path.resolve(__dirname, 'src/context'),
      data: path.resolve(__dirname, 'src/data'),
      sounds: path.resolve(__dirname, 'src/assets/sounds'),
      icons: path.resolve(__dirname, 'src/assets/icons'),
      helpers: path.resolve(__dirname, 'src/helpers'),
    },
  }),
  addWebpackModuleRule({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }),
  addPostcssPlugins([require('tailwindcss'), require('autoprefixer')]),
)
