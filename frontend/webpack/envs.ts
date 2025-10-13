import { configDotenv } from "dotenv"

configDotenv().parsed

if (!('DEV_SERVER_HOST' in process.env) || !('DEV_SERVER_PORT' in process.env)) {
    console.error('Please, configure your .env')
    process.exit(-1)
}


export const envVars = {
    OUTPUT_DIR: process.env.OUTPUT_DIR || 'dist',
    PUBLIC_PATH: process.env.PUBLIC_PATH || '/',
    DEV_SERVER_PORT: process.env.DEV_SERVER_PORT!,
    DEV_SERVER_HOST: process.env.DEV_SERVER_HOST!,
    BACKEND_HOST: process.env.BACKEND_HOST!,
}