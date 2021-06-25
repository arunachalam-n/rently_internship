module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create 
    router.post("/", tutorials.create);
  
    // Retrieve all 
    router.get("/", tutorials.findAll);
  
    // Retrieve a single 
    router.get("/:id", tutorials.findOne);
  
    // Update 
    router.put("/:id", tutorials.update);
  
    // Delete 
    router.delete("/:id", tutorials.delete);
  
    app.use('/api/tutorials', router);
  };