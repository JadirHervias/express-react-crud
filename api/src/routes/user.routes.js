const { registerUser } = require('../controllers/userController');

const register = (router) => {
  router.post('/users/sign-up', registerUser);
};

module.exports = { register };
