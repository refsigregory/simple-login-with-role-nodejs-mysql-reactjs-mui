/**
 * Role Model
 * @param {*} sequelize 
 * @param {*} Sequelize 
 * @returns squelize object for fetch roles data
 */
module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Role;
  };