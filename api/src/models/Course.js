const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const mongooseHidden = require('mongoose-hidden');

const courseSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre es necesario'],
  },
  difficulty: {
    type: String,
    enum: {
      values: ['Basic', 'Intermediate', 'Advance'],
      message: '{VALUE} no es un nivel valido',
    },
    required: [true, 'La dificultad es necesario'],
  },
  relative_topic: {
    type: String,
    required: [true, 'El tema relativo al curso es necesario'],
  },
  estimated_time: {
    type: Number,
    required: [true, 'El tiempo en horas es necesario'],
  },
  cost: {
    type: Number,
    required: [true, 'El costo es necesario'],
  },
});

courseSchema.plugin(mongooseHidden);
courseSchema.plugin(uniqueValidator, {
  message: '{PATH} debe de ser unico',
});

module.exports = model('Course', courseSchema, 'courses');
