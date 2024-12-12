const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("home page"));
indexRouter.get("/about", (req, res) => {
  res.send("about page");
});
indexRouter.get("/contact", (req, res) => {
  res.send("contact page");
});
indexRouter.post("/contact", (req, res) => {
  res.send("contact page POST");
});

module.exports = indexRouter;
