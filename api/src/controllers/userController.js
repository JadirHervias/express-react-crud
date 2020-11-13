const User = require('../models/User');
const bcrypt = require('bcrypt');
const validator = require('validator');

const registerUser = (req, res) => {
  const { email, password, name, role } = req.body;

  //validaciones del correo
  if (email !== undefined) {
    const validEmail = validator.isEmail(email);
    const validEmptyEmail = validator.isEmpty(email);

    if (validEmptyEmail) {
      return res.status(400).json({
        success: false,
        error: {
          message: 'Email is required',
        },
      });
    }

    if (!validEmail) {
      return res.status(400).json({
        success: false,
        err: {
          message: `'${email}' is not a valid email`,
        },
      });
    }
  }

  if (password !== undefined) {
    const MIN_CHARACTERS = 8;

    const validPassword = validator.isByteLength(password, {
      min: MIN_CHARACTERS,
      max: undefined,
    });

    if (!validPassword) {
      return res.status(400).json({
        success: false,
        error: {
          message: `Password must have at least ${MIN_CHARACTERS} characters`,
        },
      });
    }

    hashedPassword = bcrypt.hashSync(password, 10);
  }

  let user = new User({
    name,
    email,
    password: hashedPassword,
    role,
  });

  user.save((error, user) => {
    if (error) {
      return res.status(400).json({
        success: false,
        error,
      });
    }

    res.json({
      success: true,
      message: `${user.name} creado correctamente`,
      user: user,
    });
  });
};

module.exports = {
  registerUser,
};
