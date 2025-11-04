import { Configuration } from "webpack"

import webpack from 'webpack'
import { merge } from 'webpack-merge'
import TerserJSPlugin from 'terser-webpack-plugin'
import baseConfig from './webpack.base'
import CopyPlugin from 'copy-webpack-plugin'

import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { envVars } from "./envs"
import { realpathSync } from 'fs'
import path from 'path'

const appDirectory = realpathSync(process.cwd())
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
    new CopyPlugin({
      patterns: [
        {
          from: path.join(appDirectory, envVars.PUBLIC_PATH),
          to: path.join(appDirectory, envVars.OUTPUT_DIR,)
        }
      ]
    })
  ],
})

export default config