import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

const Search = ({ books, updateBook }) => {
  const [search, setSearch] = useState("");
  const [listBooks, setListBooks] = useState(null);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const searchMethod = async (search, maxResult) => {
    console.log({ books: books });
    const res = await BooksAPI.search(search, maxResult);

    if (res) {
      if (res.error) {
        return setListBooks(<h1> There is no element found</h1>);
      } else {
        const listBooksSearched = res.map((book) => {
          const selectedBook = books.filter((b) => b.id === book.id);
          if (selectedBook.length > 0) {
            return (
              <Book
                key={selectedBook[0].id}
                book={selectedBook[0]}
                backgroundImage={
                  selectedBook[0].imageLinks.thumbnail
                    ? selectedBook[0].imageLinks.thumbnail
                    : null
                }
                title={selectedBook[0].title}
                authors={selectedBook[0].authors}
                shelf={selectedBook[0].shelf}
                updateBook={updateBook}
              />
            );
          } else {
            return (
              <Book
                key={book.id}
                book={book}
                backgroundImage={
                  book.imageLinks ? book.imageLinks.thumbnail : null
                }
                title={book.title}
                authors={book.authors}
                shelf={book.shelf}
                updateBook={updateBook}
              />
            );
          }
        });

        setListBooks(listBooksSearched);
      }
    }
  };
  useEffect(() => {
    if (search.length > 0) {
      searchMethod(search, 5);
    }
  }, [search]);
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
