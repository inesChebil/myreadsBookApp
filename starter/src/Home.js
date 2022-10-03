import React, { useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

const Home = () => {
  const [shelfs, setShelfs] = useState([
    "Currently Reading",
    "Want to read",
    "read",
  ]);
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelfs.map((shelf, id) => {
            return (
              <div className="bookshelf" key={id}>
                <h2 className="bookshelf-title">{shelf}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <li>
                      {/* <Book /> */}
                      books
                    </li>
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

export default Home;
