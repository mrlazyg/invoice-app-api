const { DEV_ENV } = require('../env/dev');

const globalConstants = {};

globalConstants.PORT = process.env.PORT || DEV_ENV.PORT;
globalConstants.APP_NAME = 'Invoice App';

module.exports = globalConstants;
