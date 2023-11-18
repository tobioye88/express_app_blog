const blogController = require("../controllers/blog.controller.js");
const blogRouter = require("express").Router();
const cacheMiddleware = require("../middleware/cache.middleware.js");

blogRouter.get("/blogs/:id", cacheMiddleware, blogController.getBlog);
blogRouter.post("/blogs", blogController.createBlog);

module.exports = blogRouter;
