import React, { useState, useEffect } from "react";
import "./App.css";
import PropTypes from "prop-types";

export const options = [
  { value: "none", label: "none " },
  { value: "currentlyReading", label: "Currently Reading" },
  { value: "wantToRead", label: "Want to read" },
  { value: "read", label: "Read" },
];

const BookShelfChanger = ({ shelf, book, updateBook }) => {
  const [selectedShelf, setSelectedShelf] = useState(shelf);
  const [initialState, setInitialState] = useState(false);

  const changeHandler = (e) => {
    console.log(shelf);
    setInitialState(true);
    setSelectedShelf(e.target.value);
  };
  useEffect(() => {
    if (initialState) {
      updateBook(book, selectedShelf);
      setSelectedShelf(selectedShelf);
    }
  }, [selectedShelf, initialState]);

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

BookShelfChanger.propTypes = {
  shelf: PropTypes.string,
  book: PropTypes.object.isRequired,
  updateBook: PropTypes.func.isRequired,
};
export default BookShelfChanger;
