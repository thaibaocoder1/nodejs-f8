const Course = require("../models/Courses");
const { mongooseObject } = require("../../utils/mongoose");

class CoursesController {
  // [GET] /courses/:slug
  show(req, res, next) {
    const slug = req.params.slug;
    Course.findOne({ slug })
      .then((course) => {
        res.render("courses/course", {
          course: mongooseObject(course),
        });
      })
      .catch(next);
  }
}
module.exports = new CoursesController();
