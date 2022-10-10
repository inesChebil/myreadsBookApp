import React from "react";
import "./App.css";
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types";
const Book = ({ backgroundImage, title, authors, shelf, book, updateBook }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
        <BookShelfChanger shelf={shelf} book={book} updateBook={updateBook} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors && authors.join(", ")}</div>
    </div>
  );
};
Book.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.array,
  shelf: PropTypes.string,
  book: PropTypes.object.isRequired,
  updateBook: PropTypes.func.isRequired,
};
export default Book;
