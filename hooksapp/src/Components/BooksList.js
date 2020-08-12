import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";
import BookDetails from "./BookDetails";

const BooksList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book_list">
      <ul>
        {books.map((book) => {
          return <BookDetails key={book.id} book={book} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No book to read. Hello free time </div>
  );
};

export default BooksList;
