export const Book = (props) => {
  // destructure the props before using each value inside props
  const { image, title, author } = props;
  // attributes, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(`${e.target.name} clicked for ${title}`);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={image} alt="this is book cover" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button name="buyBookButton" type="button" onClick={clickHandler}>
        Buy
      </button>
    </article>
  );
};

export default Book;
