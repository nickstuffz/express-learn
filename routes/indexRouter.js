const { Router } = require("express");

const indexRouter = Router();

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

indexRouter.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

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
