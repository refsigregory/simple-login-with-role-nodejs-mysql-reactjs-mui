/**
 * Users Model
 * @param {*} sequelize 
 * @param {*} Sequelize 
 * @returns sequelize object for fetch users data
 */
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };