import { Configuration } from "webpack"

import webpack from 'webpack'
import { merge } from 'webpack-merge'
import TerserJSPlugin from 'terser-webpack-plugin'
import baseConfig from './webpack.base'

import { CleanWebpackPlugin } from 'clean-webpack-plugin'

require('dotenv').config()

const config: Configuration = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin({})],
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CleanWebpackPlugin(),
  ],
})

export default config