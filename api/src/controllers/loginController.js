const User = require('../models/User');
const appEnv = require('../config/index');
const bcrypt = require('bcrypt');

const loginUser = (req, res) => {
  User.findOne({ email: body.email }, (error, user) => {
    if (error) {
      return res.status(500).json({
        success: false,
        error,
      });
    }

    if (!user) {
      return res.status(400).json({
        success: false,
        error: {
          message: 'Invalid credentials',
        },
      });
    }

    if (body.password !== undefined) {
      if (!bcrypt.compareSync(body.password, user.password)) {
        return res.status(400).json({
          success: false,
          error: {
            message: 'Invalid credentialz',
          },
        });
      }

      const token = jwt.sign(
        {
          user: user,
        },
        appEnv.jwtSecretKey,
        { expiresIn: appEnv.jwtExpiration }
      );

      res.json({
        success: true,
        suser,
        token,
      });
    } else {
      res.status(400).json({
        success: false,
        error: {
          message: 'Password is required',
        },
      });
    }
  });
};

module.exports = {
  loginUser,
};
