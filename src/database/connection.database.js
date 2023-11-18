const { Sequelize } = require("sequelize");

// NOTE: change the values below to your own and get data from env variables
const DATABASE = "alt_blog_app";
const USERNAME = "root";
const PASSWORD = "password";

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = { sequelize };
