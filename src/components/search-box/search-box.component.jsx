import React from "react";
import './serch-box.styles.css'
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
  className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  ></input>
);
