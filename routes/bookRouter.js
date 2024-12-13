const { Router } = require("express");
const {
  getBookById,
  checkBookById,
  reserveBookById,
} = require("../controllers/bookController");

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All books"));
bookRouter.get("/:bookId", getBookById);
bookRouter.get("/:bookId/reserve", checkBookById);
bookRouter.post("/:bookId/reserve", reserveBookById);

module.exports = bookRouter;
