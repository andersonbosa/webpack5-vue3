const { resolve } = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const getRelativePath = _path => resolve(__dirname, _path)

module.exports = (env = {}) => ({
  mode: env.prod ? 'production' : 'development',

  devtool: env.prod ? 'source-map' : 'eval-cheap-module-source-map',

  entry: [
    getRelativePath('./src/main.js')
  ],

  output: {
    path: getRelativePath('./docs'),
    publicPath: '/dist/'
  },

  resolve: {
    alias: {
      /* for some unknow reason it's need :( */
      vue: '@vue/runtime-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({ filename: 'main.css' })
  ],

  devServer: {
    contentBase: __dirname,
    stats: 'minimal',
    hot: true,
    inline: true,
    overlay: true,
    injectClient: false,
    disableHostCheck: true
  }
})
