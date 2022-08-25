import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="link" to="/">
        <h1>cerlanash</h1>
      </Link>
      <div>
        <input type="text" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Header;
