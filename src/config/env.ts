export const env = {
  port: Number(process.env.PORT) || 3000,
  databaseUrl: process.env.DATABASE_URL!!,
  jwtToken: process.env.JWT_SECRET_KEY!!,
};
