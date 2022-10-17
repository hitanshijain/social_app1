const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
      process.env.MONGO_HOST ||
      'mongodb+srv://social_media:hitcd@cluster0.n6pu5v1.mongodb.net/?retryWrites=true&w=majority'
}

export default config
