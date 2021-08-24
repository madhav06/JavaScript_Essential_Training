/**
 * Challenge: Create a new object type "Book"
 * - Use class, object constructor function or individual objects
 * - add properties and methods
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "August 25, 2018 03:37:00 PST"
);

function Book(
  name1, name2, name3, name4, name5, 
  price1, price2, price3, price4, price5,
  category,
  pages1, pages2, pages3, pages4, pages5,
  isbn,
  writer1, writer2, writer3, writer4, writer5,
) {
  this.name1 = name1;
  this.name2 = name2;
  this.name3 = name3;
  this.name4 = name4;
  this.name5 = name5;
  this.price1 = price1;
  this.price2 = price2;
  this.price3 = price3;
  this.price4 = price4;
  this.price5 = price5;

  this.category = category;
  this.pages1 = pages1;
  this.pages2 = pages2;
  this.pages3 = pages3;
  this.pages4 = pages4;
  this.pages5 = pages5;

  this.isbn = isbn;

  this.writer1 = writer1;
  this.writer2 = writer2;
  this.writer3 = writer3;
  this.writer4 = writer4;
  this.writer5 = writer5;

}

const textbook = new Book(
  "Cracking the Coding Interviews",
  "Learning ElasticSearch 7.0",
  "Getting Started with Django3",
  "Fundamentals of Java Scripts with 10 Hands-On Projects",
  "Why to learn React in 2021",
  550,
  220,
  450,
  1091,
  3400,
  "Programming Books",
  542, 273, 1011, 330, 1200,
  "XX9-0-XX82834-6",
  "Gayle Laakmann Macdowell",
  "Bowman Murghtah",
  "Peter Plinth",
  "K Basu and Vinith",
  "Youngs Wattson"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

console.log("Book is all about: ", textbook.category);
console.log("details: ");
console.log("Book Name: ", textbook.name1);
console.log("Book is written by: ", textbook.writer1);
console.log("Price: ", textbook.price1);
console.log("Book Name: ", textbook.name2);
console.log("Book is written by: ", textbook.writer2);
console.log("Price: ", textbook.price2);
console.log("Book Name: ", textbook.name3);
console.log("Book is written by: ", textbook.writer3);
console.log("Price: ", textbook.price3);
console.log("Book Name: ", textbook.name4);
console.log("Book is written by: ", textbook.writer4);
console.log("Price: ", textbook.price4);
console.log("Book Name: ", textbook.name5);
console.log("Book is written by: ", textbook.writer5);
console.log("Price: ", textbook.price5);
