const db = require("../SEIV_Project2_Backend/models");
const Course = db.course;
const Op = db.Sequelize.Op;

// Create and save a new Course
exports.create = (req, res) => {
    // Validate request
    if (!req.body.courseNum) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    // Create a Course
  const course = {
    courseNum: req.body.courseNum,
    dept: req.body.dept,
    level: req.body.level,
    hours: req.body.hours,
    name: req.body.name,
    desc: req.body.desc
    // refresh_token: req.body.refresh_token,
    // expiration_date: req.body.expiration_date
  };

  // Save Course in the database
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