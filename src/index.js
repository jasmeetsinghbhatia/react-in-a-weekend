import React from "react";
import ReactDom from "react-dom";

//css
import "./index.css";
// book component from book.js
import {Book} from "./book";
// data about books from books.js
import { Books } from "./books";

const booksList = Books.map((book) => {
  return <Book book={book}/>;
});

function BookList() {
  return (
    <section className="booklist">
      {booksList}
      </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
