const Book = require("../models/book");

module.exports = async (request, response) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(request.params.id, request.body);
    response.status(200).json(updatedBook);
  } catch (error) {
    console.log(error);
    response.json(error);
  }
};
