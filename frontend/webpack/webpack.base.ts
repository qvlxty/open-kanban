import { Configuration, DefinePlugin } from 'webpack'
import merge from 'webpack-merge'

import * as path from 'path'
import { realpathSync } from 'fs'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

import loadersConfig from './webpack.loaders'
import { envVars } from './envs'

const appDirectory = realpathSync(process.cwd())

const config: Configuration = merge(loadersConfig, {
  entry: path.join(appDirectory, './src/App.tsx'),
  output: {
    path: path.join(appDirectory, envVars.OUTPUT_DIR),
    publicPath: '/',
    filename: 'js/[name].[fullhash].js',
    chunkFilename: 'js/[id].[fullhash].js',
    clean: true,
  },
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'], },
  plugins: [
    new DefinePlugin({
      'process.env': JSON.stringify(envVars)
    }),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
})


export default config