const Course = require("../models/Courses");

class SiteController {
  // [GET] /
  index(req, res) {
    Course.find({})
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        console.error(err);
      });
    // res.render('home');
  }
  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
