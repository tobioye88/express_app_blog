const blogController = require("../controllers/blog.controller.js");
const blogRouter = require("express").Router();

blogRouter.get("/blogs/:id", blogController.getBlog);
blogRouter.post("/blogs", blogController.createBlog);

module.exports = blogRouter;
