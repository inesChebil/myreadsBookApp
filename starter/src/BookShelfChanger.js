import React, { useState, useEffect } from "react";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
const options = [
  { value: "currentlyReading", label: "Currently Reading" },
  { value: "wantToRead", label: "Want to read" },
  { value: "read", label: "Read" },
];

const BookShelfChanger = ({ shelf, book }) => {
  const [selectedShelf, setSelectedShelf] = useState(shelf);

  const changeHandler = (e) => {
    setSelectedShelf(e.target.value);
  };
  useEffect(() => {
    const updateBook = async () => {
      await BooksAPI.update(book, selectedShelf);
    };
    updateBook();
  }, [selectedShelf, BooksAPI]);
  return (
    <div className="book-shelf-changer">
      <select value={selectedShelf} onChange={changeHandler}>
        <option value="none" disabled>
          Move to...
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BookShelfChanger;
