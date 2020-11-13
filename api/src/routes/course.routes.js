const {
  findAllCourses,
  findCourse,
  updateCourse,
  createCourse,
  deleteCourse,
} = require('../controllers/courseController');

const register = (router) => {
  router.get('/courses', findAllCourses);
  router.get('/courses/:id', findCourse);
  router.post('/courses', createCourse);
  router.put('/courses/:id', updateCourse);
  router.delete('/courses/:id', deleteCourse);
};

module.exports = { register };
