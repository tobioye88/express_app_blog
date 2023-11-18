const express = require("express");
const { sequelize } = require("./database/connection.database.js");
const authRouter = require("./routes/auth.route.js");
var bodyParser = require("body-parser");
const blogRouter = require("./routes/blog.route.js");

const app = express();
const PORT = 8085;

// app.use(bodyParser.json({ type: "application/*+json" }));
// app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
// app.use(bodyParser.text({ type: "text/html" }));
app.use(bodyParser.json());

sequelize.sync({ force: false }).then(() => {
  console.log("Database and tables created!");
});

app.use("/v1", authRouter);
app.use("/v1", blogRouter);

app.all("*", (req, res) => {
  res.status(404).json({ success: false });
});

app.listen(PORT, () => {
  console.log(`Server started on port: http://localhost:${PORT}`);
});
