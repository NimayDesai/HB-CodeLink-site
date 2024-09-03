declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      REDIS_URL: string;
      PORT: string;
      CORS_ORIGIN: string;
      CLIENT_ID: string;
      CLIENT_SECRET: string;
      SESSION_SECRET: string;
      ADMIN_PASSWORD: string;
      MAILGUN_API_KEY: string;
    }
  }
}

export {}
