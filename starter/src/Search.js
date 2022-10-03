import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Book from "./Book";

const Search = ({ books }) => {
  console.log({ books: books });
  const [search, setSearch] = useState("");
  const listBooks = books
    .filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.authors.toString().toLowerCase().includes(search.toLowerCase()) ||
        JSON.stringify(book.industryIdentifiers)
          .toLowerCase()
          .includes(search.toLowerCase())
    )
    .map((book) => {
      return (
        <Book
          key={book.id}
          book={book}
          backgroundImage={book.imageLinks.thumbnail}
          title={book.title}
          authors={book.authors}
          shelf={book.shelf}
        />
      );
    });
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={search}
            onChange={searchHandler}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">{search ? listBooks : null}</ol>
      </div>
    </div>
  );
};

export default Search;
