const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  DBMongoUrl: process.env.DB_MONGO_URL,
};
