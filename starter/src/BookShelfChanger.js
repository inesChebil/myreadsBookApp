import React, { useState, useEffect } from "react";
import "./App.css";

export const options = [
  { value: "currentlyReading", label: "Currently Reading" },
  { value: "wantToRead", label: "Want to read" },
  { value: "read", label: "Read" },
];

const BookShelfChanger = ({ shelf, book, updateBook }) => {
  const [selectedShelf, setSelectedShelf] = useState(shelf);

  const changeHandler = (e) => {
    console.log(e.target.value);
    setSelectedShelf(e.target.value);
  };
  useEffect(() => {
    updateBook(book, selectedShelf);
    setSelectedShelf(selectedShelf);
    console.log("loool");
    console.log(selectedShelf);
  }, [selectedShelf]);

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
