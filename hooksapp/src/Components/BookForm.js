import React, { useContext, useState } from "react";
import { BookContext } from "../Context/BookContext";

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const addTitle = (e) => {
    setTitle(e.target.value);
  };

  const addAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        author,
      },
    });
    setAuthor("");
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={addTitle}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={addAuthor}
        required
      />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default BookForm;
