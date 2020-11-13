module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || '6000',
  isDev: process.env.NODE_ENV !== 'production',
  dbUrl: process.env.MONGO_URL,
  jwtSecretKey: process.env.JWT_SECRET_KEY,
  jwtExpiration: process.env.JWT_EXPIRATION,
};
