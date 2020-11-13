const { loginUser } = require('../controllers/loginController');

const register = (router) => {
  router.get('/auth/login', loginUser);
};

module.exports = { register };
