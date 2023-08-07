const Book = require("../models/book");

module.exports = async (request, response) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(request.params.id);
    response.status(200).json(deletedBook);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
};
