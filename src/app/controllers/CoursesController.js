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
  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }
  // [POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.thumbnail = `https://i.ytimg.com/vi/${formData.videoID}/maxresdefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => {
        res.redirect("/");
      })
      .catch(next);
  }
  // [GET] /courses/edit/:id
  edit(req, res, next) {
    const id = req.params.id;
    Course.findById(id)
      .then((course) => {
        res.render("courses/edit", {
          course: mongooseObject(course),
        });
      })
      .catch(next);
  }
  // [PUT] /courses/update/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
  // [DELETE] /courses/delete/:id
  delete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}
module.exports = new CoursesController();
