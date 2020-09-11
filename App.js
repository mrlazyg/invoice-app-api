const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const path = require('path');
const logger = require('morgan');
const { PORT } = require('./config/constant');
const Routes = require('./routes/Routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); //  app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json()); //  app.use(express.json());
/* Use logger in specific env */
if (app.get('env') === 'development') {
  app.use(logger('short'));
  console.log('Logger enabled in dev...');
}

app.use((error, req, res, next) => {
  console.log(`Request received for URI ${req.path}`);
  // res.status(error.status);
  res.send(JSON.stringify(error.message));
  next();
});

const router = express.Router();
Routes.createRoutes(router);
app.use('/', router);

app.listen(PORT, async () => {
  console.log(`App is listening to port ${PORT}.`);
});
