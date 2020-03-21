const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
    if (!req.body.email) {
        res.status(400).send({
          message: "email must br provided"
        });
        return;
      }
    
      // Create a User
      const user = {
        email: req.body.email,
        password: req.body.password,
        isActive: req.body.isActive ? req.body.isActive : true,
        isDeleted: req.body.isDeleted ? req.body.isDeleted : true
      };
    
      // Save User in the database
      User.create(user)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User."
          });
        });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  
};

// Find a single User with an id
exports.findOne = (req, res) => {
  
};

// Update a User by the id in the request
exports.update = (req, res) => {
  
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all active Users
exports.findAllActive = (req, res) => {
  
};