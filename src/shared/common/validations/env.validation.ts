import * as Joi from "joi";

export const envSchema = Joi.object({
      PORT: Joi.number().required().default(5000),
      DB_HOST: Joi.string().required().default('localhost'),
      DB_PORT: Joi.number().required().default(5432),
      DB_USERNAME: Joi.string().required().default('postgres'),
      DB_PASSWORD: Joi.string().required().default('postgres'),
      DB_DATABASE: Joi.string().required().default('repo_health_insights'),
      NODE_ENV: Joi.string().required().default('development'),
      API_PREFIX: Joi.string().required().default('api'),
})