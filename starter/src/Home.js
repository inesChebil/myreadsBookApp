import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import PropTypes from "prop-types";

import { options } from "./BookShelfChanger";

const Home = ({ books, updateBook }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {options
            .filter((op) => op.value !== "none")
            .map((option) => {
              return (
                <div className="bookshelf" key={option.value}>
                  <h2 className="bookshelf-title">{option.label}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books
                        .filter((book) => book.shelf === option.value)
                        .map((book) => {
                          return (
                            <Book
                              key={book.id}
                              book={book}
                              backgroundImage={
                                book.imageLinks.thumbnail
                                  ? book.imageLinks.thumbnail
                                  : null
                              }
                              title={book.title}
                              authors={book.authors}
                              shelf={book.shelf}
                              updateBook={updateBook}
                            />
                          );
                        })}

                      {/* <li>
                      <Book />
                    </li> */}
                    </ol>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

Home.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
};
export default Home;
