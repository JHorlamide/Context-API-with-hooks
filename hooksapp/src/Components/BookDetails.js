import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";

const BookDetails = ({ book }) => {
  
  const { dispatch } = useContext(BookContext);

  const removeBook = () => {
    dispatch({ type: "REMOVE_BOOK", id: book.id });
  };

  return (
    <div>
      <li>
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
        <button onClick={removeBook}>Delete Book</button>
      </li>
    </div>
  );
};

export default BookDetails;
