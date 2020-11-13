const glob = require('glob');

const registerRoutes = (router) => {
  const routes = glob.sync(__dirname + '/**/*.routes.*');
  routes.map((route) => {
    register(route, router);
  });
};

const register = (routePath, router) => {
  const route = require(routePath);
  route.register(router);
};

module.exports = registerRoutes;
