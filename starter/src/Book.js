import React from "react";
import "./App.css";
import BookShelfChanger from "./BookShelfChanger";
const Book = ({ backgroundImage, title, authors }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: backgroundImage,
          }}
        ></div>
        <BookShelfChanger />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

export default Book;
