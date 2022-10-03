import "./App.css";
import { useState } from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Search from "./Search";
import * as BooksAPI from "./BooksAPI";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
