export const Book = (props) => {
  // destructure the props before using each value inside props
  const { image, title, author } = props.book;
  return (
    <article className="book">
      <img src={image} alt="this is book cover" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};