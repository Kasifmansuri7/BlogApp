import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="flex justify-between items-center mb-10">
      <Link to="/" className="font-semibold text-2xl">
        My Blog
      </Link>
      <nav className="flex gap-3">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}

export default Header;
