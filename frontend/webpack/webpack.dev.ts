import webpackMerge from 'webpack-merge'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import baseConfig from './webpack.base'
import { envVars } from './envs'
import 'webpack-dev-server'
import { realpathSync } from 'fs'
import { resolve } from 'path'

const appDirectory = realpathSync(process.cwd())
const config = webpackMerge(baseConfig, {
  mode: 'development',
  plugins: [new ReactRefreshWebpackPlugin()],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    host: envVars.DEV_SERVER_HOST,
    port: +envVars.DEV_SERVER_PORT,
    historyApiFallback: true,
    static: {
        directory: resolve(appDirectory, envVars.PUBLIC_PATH),
    },
    proxy: [
      {
        context: ['/api'],
        target: process.env.BACKEND_HOST,
      },
    ],
  }
})

export default config