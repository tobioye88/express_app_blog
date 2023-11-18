const Cache = require("../helpers/cache.helper.js");

const cacheMiddleware = (req, res, next) => {
  const { id } = req.params;
  const cacheKey = `blog-${id}`;
  const cachedBlog = Cache.get(cacheKey);
  if (cachedBlog) {
    console.log("cache hit");
    res.json({ success: true, message: "success", data: cachedBlog });
    return;
  }
  next();
};

module.exports = cacheMiddleware;
