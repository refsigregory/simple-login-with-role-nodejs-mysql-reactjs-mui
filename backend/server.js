const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./app/models");

const User = db.user;
const Role = db.role;

var bcrypt = require("bcryptjs");

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//db.sequelize.sync();
db.sequelize.sync({force: false}).then(() => {
   initial();
});

/**
 * Routes
 */
app.get("/", (req, res) => {
  res.json({ message: "Welcome to simple login with auth." });
});
// other routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  // Create Role
  Role.findAll().then(roles => {
    if (roles.length === 0) {
      Role.create({
        id: 1,
        name: "admin"
      });
    
      Role.create({
        id: 2,
        name: "user"
      });
    }
  });

  /**
   * Auto Generate User every start application
   * Disable if not needed
   */
  // Create Admin
  User.findOne({
    where: {
      username: 'admin',
    }
  })
    .then(user => {
     if (!user) {
        User.create({
          username: 'admin',
          email: 'admin@localhost.local',
          password: bcrypt.hashSync('password', 8)
        })
          .then(user => {
            user.setRoles(1).then(() => {
              console.log("User admin was added successfully!");
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    })
    // Create User
    User.findOne({
      where: {
        username: 'user',
      }
    })
      .then(user => {
       if (!user) {
          User.create({
            username: 'user',
            email: 'user@localhost.local',
            password: bcrypt.hashSync('password', 8)
          })
            .then(user => {
              user.setRoles(2).then(() => {
                console.log("User was added successfully!");
              });
            })
            .catch(err => {
              console.log(err);
            });
        }
      })
}