const { ROLES } = require("../models");
const db = require("../models");
const User = db.user;
const Role = db.role;

exports.userAll = (req, res) => {
  User.findAll({
    include: [
     db.role
    ],
  })
    .then(async users => {
      if (!users) {
        return res.status(200).send({ code: 404, error: true, message: "No Data" });
      }

      let results = []
      await users.forEach((row) => {
        let authorities = []
        for (let i = 0; i < row.roles.length; i++) {
          authorities.push("" + row.roles[i].name.toUpperCase());
        }
        results = [
          ...results,
          {
            id: row.id,
            username: row.username,
            email: row.email,
            role: authorities
          }
        ]
      });

      res.status(200).send({
        code: 200,
        error: false, 
        data: results,
      });
    })
    .catch(err => {
      res.status(200).send({ code: 500, error: true, message: err.message });
    });
};

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};