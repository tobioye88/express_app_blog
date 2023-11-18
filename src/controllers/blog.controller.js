const { Blog } = require("../database/models/blog.model");
const NodeCache = require("node-cache");

const Cache = new NodeCache();

const getBlog = async (req, res) => {
  const { id } = req.params;
  // add node cache here
  const cacheKey = `blog-${id}`;
  const cachedBlog = Cache.get(cacheKey);
  if (cachedBlog) {
    console.log("cache hit");
    res.json({ success: true, message: "success", data: cachedBlog });
    return;
  }
  const post = await Blog.findOne({ where: { id } });
  if (!post) {
    res.status(404).json({
      success: false,
      message: "Post not found",
      internalCode: "GBF1",
    });
    return;
  }
  console.log("cache miss");
  const TTL_1_DAY = 60 * 60 * 24;
  Cache.set(cacheKey, post, TTL_1_DAY);
  res.json({ success: true, message: "success", data: post });
};

const getBlogs = async (req, res) => {
  const posts = await Blog.findAll();
  res.json({ success: true, message: "success", data: posts });
};

const createBlog = async (req, res) => {
  console.log("here");
  const { title, body, banner_image } = req.body;
  const post = await Blog.create({
    title,
    body,
    banner_image,
  });
  res.json({ success: true, message: "success", data: post });
};

module.exports = {
  getBlog,
  getBlogs,
  createBlog,
};
