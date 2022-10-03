import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Search from "./Search";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();

      setBooks(res);
    };
    getBooks();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home books={books} />} />
        <Route exact path="/search" element={<Search books={books} />} />
      </Routes>
    </div>
  );
}

export default App;
