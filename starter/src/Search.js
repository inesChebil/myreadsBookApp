import React, { useEffect, useState } from "react";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
const Search = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);
  return (
    <div className="search-books">
      Helo
      {/* {console.log(books)}
      {books.map((book) => {
        console.log(book.shelf);
      })} */}
      {/* <div className="search-books-bar">
        <a
          className="close-search"
          onClick={() => setShowSearchpage(!showSearchPage)}
        >
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div> */}
    </div>
  );
};

export default Search;
