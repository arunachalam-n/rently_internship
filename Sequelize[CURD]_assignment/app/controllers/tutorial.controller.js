const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save 
exports.create = (req, res) => {

    if(!req.body.project){
        res.status(400).send({
            message: "Content cannot be empty"
        });
        return;
    }
    
    const tutorial = {
        project: req.body.project,
        manager: req.body.manager,
        engineer: req.body.engineer,
    };

    Tutorial.create(tutorial)
        .then(data => res.send(data))
        .catch( err => {res.status(500).send({
            message: err.message || "Error occured while creation"
        });
    });
};

// Retrieve all 
exports.findAll = (req, res) => {
    const project = req.query.project;
    var condition = project ? { project: { [Op.iLike]: `%${project}%` } } : null;
  
    Tutorial.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

// Find a single by id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Tutorial.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };

// Update 
exports.update = (req, res) => {
    const id = req.params.id;

    Tutorial.update(req.body,{
        where: {id: id}
    })
    .then(num => {
        if(num === 1){
            res.send({message:"Successfully updated"})
        } else {
            res.send({
                message:`Cannot update Tutorial with id=${id}`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error while updating id = " + id
        });
    });
};

// Delete 
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Tutorial.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id = " + id
        });
      });
  };

