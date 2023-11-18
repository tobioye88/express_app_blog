const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection.database.js");
const { User } = require("./user.model.js");
const { Blog } = require("./blog.model.js");

const UserBlogLikes = sequelize.define("User_blog_like", {
  user_id: User,
  blog_id: Blog,
  // created_at: DataTypes.DATE,
  // updated_at: DataTypes.DATE,
});

module.exports = { UserBlogLikes };
