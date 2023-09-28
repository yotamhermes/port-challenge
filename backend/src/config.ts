export default {
  port: process.env.PORT,
  database: {
    type: "mongodb",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
  },
};
