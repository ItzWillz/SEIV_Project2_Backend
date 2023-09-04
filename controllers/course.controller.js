const db = require("../models");
const Course = db.course;
const Op = db.Sequelize.Op;

// Define the create function for courses and export it.
exports.create = (req, res) => {
    // Validate request
    if (req.body.courseNum != null) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

  // Create a course object
  const course = {
    courseNum: req.body.courseNum,
    dept: req.body.dept,
    hours: req.body.hours,
    level: req.body.level,
    name: req.body.name,
    //desc: req.body.desc
    // refresh_token: req.body.refresh_token,
    // expiration_date: req.body.expiration_date
  };

  // Save Course in the database by creating a new Course instance and giving it the created course object which will be sequelized.
  Course.create(course)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Course.",
      });
    });

};

// Define the findAll function for courses that gets all courses from the database.
exports.findAll = (req, res) => {
  const courseNum = req.query.courseNum;
  var condition = courseNum ? { courseNum: { [Op.like]: `%${courseNum}%` } } : null;
  Course.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};