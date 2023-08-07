const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Book = require("./models/book");

async function seed() {
  await Book.create({
    title: "My Teacher is an Alien",
    description: "An alien visits earth and disguised as a human takes the role of a teacher in a school.",
    status: true,
  });
  await Book.create({
    title: "Gone with the wind",
    description: "A book about an elephant that got swept away with the wind.",
    status: false,
  });
  console.log("Yo books is in da base");
  mongoose.disconnect();
}

seed();
