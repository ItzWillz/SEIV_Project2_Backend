module.exports = (app) => {
    const courses = require("../SEIV_Project2_Backend/controllers/course.controller.js");
    var router = require("express").Router();
  
    // Create a new Course
    router.post("/", courses.create);
  
    // Retrieve all Courses
    router.get("/", courses.findAll);
  
    // // Retrieve a single Courses with courseNum
    // router.get("/:courseNum", courses.findOne);
  
    // // Update a Course with courseNum
    // router.put("/:courseNum", courses.update);
  
    // // Delete a Course with courseNum
    // router.delete("/:courseNum", courses.delete);
  
    // // Delete all Courses
    // router.delete("/", courses.deleteAll);
  
    app.use("/", router);
  };