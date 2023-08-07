const Book = require("../models/book");

module.exports = async (request, response) => {
  try {
    const theBook = await Book.find({ _id: request.params.id });
    response.status(200).json(theBook);
  } catch (error) {
    console.log(error);
    response.status(500).json(theBook);
  }
};
