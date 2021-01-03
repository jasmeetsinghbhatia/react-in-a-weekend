import React from "react";
import ReactDom from "react-dom";

//css
import "./index.css";
// book component from book.js
import { Book } from "./Book";
// data about books from books.js
import { Data } from "./data";

const booksList = Data.map((book) => {
  return <Book key={book.id} {...book} />;
});

function BookList() {
  return <section className="booklist">{booksList}</section>;
}

ReactDom.render(<BookList />, document.getElementById("root"));
