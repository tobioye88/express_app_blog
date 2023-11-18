const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection.database.js");

const User = sequelize.define("User", {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  // created_at: DataTypes.DATE,
  // updated_at: DataTypes.DATE,
});

module.exports = { User };
