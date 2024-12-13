const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

const books = [
  { id: 1, name: "To Kill a Mockingbird", reserved: false },
  { id: 2, name: "A Tale of Two Cities", reserved: false },
  { id: 3, name: "The Handmaid's Tale", reserved: true },
];

async function findAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}

async function findBookById(bookId) {
  return books.find((book) => book.id === bookId);
}

async function availableBookById(bookId) {
  return books.find((book) => book.id === bookId).reserved;
}

async function reserveBookById(bookId) {
  books.find((book) => book.id === bookId).reserved = true;
  return;
}
module.exports = {
  findAuthorById,
  findBookById,
  availableBookById,
  reserveBookById,
};
