import React from "react";
import "./App.css";
import BookShelfChanger from "./BookShelfChanger";
const Book = ({ backgroundImage, title, authors, shelf, book }) => {
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
        <BookShelfChanger shelf={shelf} book={book} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors.toString()}</div>
    </div>
  );
};

export default Book;
