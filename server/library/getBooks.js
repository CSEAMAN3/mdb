const Book = require("../models/book");

module.exports = async (request, response) => {
  try {
    const getBooks = await Book.find(request.query);
    response.status(200).json(getBooks);
  } catch (error) {
    console.log(error);
    response.json(error);
  }
};
