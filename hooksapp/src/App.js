import React from "react";
import  BookContextProvider  from './Context/BookContext';
import Navbar from "./Components/Navbar";
import BooksList from "./Components/BooksList";
import BookForm from "./Components/BookForm";


function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BooksList/>
        <BookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
