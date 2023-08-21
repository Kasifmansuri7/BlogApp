import React from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <form className="flex flex-col max-w-lg mx-auto gap-1">
      <h2 className="text-center text-2xl font-semibold mb-4">Register</h2>
      <input type="text" placeholder="username" className="px-4 py-2 border" />
      <input type="text" placeholder="email" className="px-4 py-2 border" />
      <input
        type="password"
        placeholder="password"
        className="px-4 py-2 border"
      />
      <Link to="/login" className="italic text-sm underline text-right">
        Already have an account?
      </Link>
      <button className="border px-4 py-2 text-white bg-black">Register</button>{" "}
    </form>
  );
}

export default RegisterPage;
