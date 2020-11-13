const Course = require('../models/Course');

const findAllCourses = (req, res) => {
  Course.find({})
    .sort({ updatedAt: -1 })
    .lean()
    .exec()
    .then((courses) => {
      return res.status(200).json({
        message: 'All courses',
        data: courses,
      });
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({
        message: 'Error trying to get all courses',
        error: error.message,
      });
    });
};

const findCourse = (req, res) => {
  const { id } = req.params;
  Course.findById(id)
    .lean()
    .exec()
    .then((course) => {
      if (!course) {
        return res.status(404).json({
          message: 'Course not found',
          data: course,
        });
      }

      return res.status(200).json({
        message: 'Course found',
        data: course,
      });
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({
        message: 'Error in trying to find course',
        error: error.message,
      });
    });
};

const createCourse = async (req, res) => {
  const { name, difficulty, relative_topic, estimated_time, cost } = req.body;

  if (!name || !difficulty || !relative_topic || !estimated_time || !cost) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
    });
  }

  const course = new Course(req.body);

  course.save((error, data) => {
    if (error) {
      return res.status(400).json({
        success: false,
        error,
      });
    }

    res.status(200).json({
      success: true,
      message: 'Course created successfully',
      data,
    });
  });
};

const updateCourse = async (req, res) => {
  const { id } = req.params;

  Course.findByIdAndUpdate(
    id,
    {
      ...req.body,
    },
    { new: true }
  )
    .exec()
    .then((course) => {
      if (!course) {
        return res.status(404).json({
          success: false,
          message: 'Course not found',
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Course updated successfully',
        data: course,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: 'Failed to update course',
      });
    });
};

const deleteCourse = (req, res) => {
  const { id } = req.params;

  Course.findByIdAndDelete(id)
    .exec()
    .then((data) => {
      if (!data) {
        return res.status(400).json({
          success: false,
          message: 'Course not found',
        });
      }

      return res.status(200).json({
        ok: true,
        message: 'Course deleted successfully',
        data,
      });
    })
    .catch((error) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: 'Error trying to delete the course',
        });
      }
    });
};

module.exports = {
  findAllCourses,
  findCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
