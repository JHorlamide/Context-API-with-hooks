import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../bookReducer/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('book');
    return localData ? JSON.parse(localData) : []
  });

  useEffect(() => {
    localStorage.setItem('book', JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
