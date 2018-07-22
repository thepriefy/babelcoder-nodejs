require('dotenv').config()

export default {
  host: process.env.HOST,
  port: process.env.PORT || 80,
  databaseUrl: process.env.DATABASE_URL
}
