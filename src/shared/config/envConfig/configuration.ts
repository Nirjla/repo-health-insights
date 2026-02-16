import { registerAs } from "@nestjs/config"

export default registerAs('server', () => ({
      port: process.env.PORT || 5000,
      env: process.env.NODE_ENV || 'development',
      apiPrefix: process.env.API_PREFIX || 'api',
      database: {
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT || 5432,
            username: process.env.DB_USERNAME || 'postgres',
            password: process.env.DB_PASSWORD || 'postgres',
            database: process.env.DB_DATABASE || 'repo_health_insights',
      },
}))   