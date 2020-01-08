import React from "react";
// import SearchIcon from '@material-ui/icons/Search';

import icon from "./search.png";
import "./SearchField.scss";

export default function SearchField({ handleChange }) {
  return (
    <div className="Search">
      <img src={icon} alt="" />
      <input placeholder="Search by Location" onChange={handleChange} />
    </div>
  );
}
