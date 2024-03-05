const Course = require("../models/Courses");
const { multipleMongooseObject } = require("../../utils/mongoose");

class MeController {
  // [GET] /courses/:slug
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) => {
        courses = multipleMongooseObject(courses);
        res.render("me/courses/courses", {
          courses,
        });
      })
      .catch(next);
  }
}
module.exports = new MeController();
