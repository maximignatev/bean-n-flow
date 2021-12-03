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
      components: path.resolve(__dirname, 'src/components/'),
      hooks: path.resolve(__dirname, 'src/hooks/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      icons: path.resolve(__dirname, 'src/assets/icons'),
      sounds: path.resolve(__dirname, 'src/assets/sounds'),
      context: path.resolve(__dirname, 'src/context'),
    },
  }),
  addWebpackModuleRule({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }),
  addPostcssPlugins([require('tailwindcss'), require('autoprefixer')]),
)
