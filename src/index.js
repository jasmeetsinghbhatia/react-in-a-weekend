import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <React.Fragment>
      <div>
        <Person />
        <Message />
      </div>
    </React.Fragment>
  );
}

const Person = () => {
  return <h1>John Doe</h1>;
};

const Message = () => {
  return <p> This is a message</p>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
