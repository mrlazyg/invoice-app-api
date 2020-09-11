module.exports = {
  PORT: 3000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/',
  DB_OPTIONS: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'DEV_DB',
  },
  DB_NAME: 'DEV_DB',
};
