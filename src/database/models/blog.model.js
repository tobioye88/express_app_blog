const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection.database.js");
const { User } = require("./user.model.js");

const Blog = sequelize.define("Blog", {
  title: DataTypes.STRING,
  body: DataTypes.STRING,
  // user_id: User,
  banner_image: DataTypes.STRING,
  // created_at: DataTypes.DATE,
  // updated_at: DataTypes.DATE,
});

module.exports = { Blog };
