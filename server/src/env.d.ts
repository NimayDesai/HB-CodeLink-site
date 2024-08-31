declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      CLIENT_ID: string;
      CLIENT_SECRET: string;
      SESSION_SECRET: string;
      SENDGRID_API_KEY: string;
      SMTP_USERNAME: string;
      SMTP_PASSWORD: string;
      ADMIN_PASSWORD: string;
    }
  }
}

export {}
