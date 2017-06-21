const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
let node_modules_path = path.resolve(__dirname, '../../../', 'node_modules');


const env = process.env.NODE_ENV || 'development'
const dev = env === 'development'

const extractSassPluginConfig = new ExtractTextPlugin({
  filename: 'style.css',
});

const ProvidePluginConfig = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Reveal: 'reveal.js',
  head: 'reveal.js/lib/js/head.min.js'
});

const PLUGINS = [
  new HtmlWebpackPlugin({
    template: './index.html'
  }),
  new CopyWebpackPlugin([
    { from: { glob: 'content/*.md' } }
  ]),
  extractSassPluginConfig,
  ProvidePluginConfig
]

if (dev) {
  PLUGINS.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: './main.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  externals: {
    'reveal': 'Reveal'
  },
  module: {
    loaders: [
      // { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, loaders: ['file-loader'] },
      {
        test: /\.(scss|css)$/,
        exclude: '/node_modules/',
        use: ExtractTextPlugin.extract({
            fallback: [{
                loader: 'style-loader',
            }],
            use: [{
                loader: 'css-loader',
            }, {
                loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [node_modules_path]
              }
            },
          ],
        }),
      }
    ]
  },
  plugins: PLUGINS,
  devServer: {
    noInfo: true,
    port: 8081
  }
};
