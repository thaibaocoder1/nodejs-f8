const Course = require("../models/Courses");
const { multipleMongooseObject } = require("../../utils/mongoose");

class SiteController {
  // [GET] /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        courses = multipleMongooseObject(courses);
        res.render("home", {
          courses,
        });
      })
      .catch(next);
  }
  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
