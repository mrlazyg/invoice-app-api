module.exports = {
  DEV_ENV: {
    PORT: 3000,
    NODE_ENV: 'DEV',
  },
  MONGODB: {
    URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/',
    OPTIONS: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'DEV_DB',
    },
    DB_NAME: 'DEV_DB',
  },
};
