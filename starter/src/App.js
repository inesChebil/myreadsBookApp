import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Search from "./Search";
import * as BooksAPI from "./BooksAPI";
import NotFound from "./NotFound";

function App() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const res = await BooksAPI.getAll();

    setBooks(res);
  };

  const updateBook = async (book, selectedShelf) => {
    await BooksAPI.update(book, selectedShelf);
  };
  useEffect(() => {
    getBooks();
  }, [books]);

  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          exact
          path="/"
          element={<Home books={books} updateBook={updateBook} />}
        />
        <Route
          exact
          path="/search"
          element={<Search books={books} updateBook={updateBook} />}
        />
      </Routes>
    </div>
  );
}

export default App;
