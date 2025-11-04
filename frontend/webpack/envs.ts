import { config } from "dotenv"

config()

export const envVars = {
    OUTPUT_DIR: process.env.OUTPUT_DIR || 'dist',
    PUBLIC_PATH: process.env.PUBLIC_PATH || 'public',
    DEV_SERVER_PORT: process.env.DEV_SERVER_PORT!,
    DEV_SERVER_HOST: process.env.DEV_SERVER_HOST!,
    BACKEND_HOST: process.env.BACKEND_HOST!,
}