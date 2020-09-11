class Routes {
  static createRoutes(router) {
    router.get('/', (req, res) => {
      res.send('Welcome to Invoice App');
    });

    router.get('/api/health', (req, res) => {
      res.send({ message: 'Ok', uptime: process.uptime() });
    });
  }
}

module.exports = Routes;
