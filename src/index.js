import React from "react";
import ReactDom from "react-dom";

//css
import "./index.css";

const firstBook = {
  title: "book1",
  author: "author1",
  image:
    "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
};
const secondBook = {
  title: "book2",
  author: "author2",
  image:
    "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        image={firstBook.image}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          consequatur itaque dignissimos rerum, eaque labore. Soluta nostrum
          laborum facilis blanditiis.
        </p>
      </Book>
      <Book
        title={secondBook.title}
        author={secondBook.author}
        image={secondBook.image}
      />
    </section>
  );
}

const Book = (props) => {
  // destructure the props before using each value inside props
  const { image, title, author, children } = props;
  return (
    <article className="book">
      <img src={image} alt="this is book cover" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
