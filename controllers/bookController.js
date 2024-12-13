const db = require("../db");
const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getBookById = asyncHandler(async (req, res) => {
  const { bookId } = req.params;

  const book = await db.findBookById(Number(bookId));

  if (!book) {
    throw new CustomNotFoundError("Book not found");
  }
  res.send(`Book Name: ${book.name}`);
});

const checkBookById = asyncHandler(async (req, res) => {
  const { bookId } = req.params;

  const book = await db.findBookById(Number(bookId));

  if (!book) {
    throw new CustomNotFoundError("Book not found");
  }

  const reserved = await db.availableBookById(Number(bookId));

  if (reserved) {
    res.send(`Book Name: ${book.name} is not available`);
  } else {
    res.send(`Book Name: ${book.name} is available`);
  }
});

const reserveBookById = asyncHandler(async (req, res) => {
  const { bookId } = req.params;

  const book = await db.findBookById(Number(bookId));

  if (!book) {
    throw new CustomNotFoundError("Book not found");
  }

  const reserved = await db.availableBookById(Number(bookId));

  if (reserved) {
    res.send(`Book Name: ${book.name} is not available`);
  } else {
    await db.reserveBookById(Number(bookId));

    res.send(`Book Name: ${book.name} reserved for YOU`);
  }
});

module.exports = { getBookById, checkBookById, reserveBookById };
