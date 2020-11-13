const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const mongooseHidden = require('mongoose-hidden');

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre es necesario'],
  },
  photo: {
    type: String,
    default: 'uploads\\default-picture.png',
  },
  role: {
    type: String,
    default: 'USER_ROLE',
    enum: {
      values: ['ADMIN_ROLE', 'USER_ROLE'],
      message: '{VALUE} no es un rol valido',
    },
  },
  email: {
    type: String,
    required: [true, 'El correo es obligatorio'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatorio'],
    hide: true,
  },
  state: {
    type: Boolean,
    default: true,
  },
});

userSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;

  return userObject;
};

userSchema.plugin(mongooseHidden);
userSchema.plugin(uniqueValidator, {
  message: '{PATH} debe de ser unico',
});

module.exports = model('User', userSchema, 'users');
