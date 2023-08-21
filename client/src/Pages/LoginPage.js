import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <form className="flex flex-col max-w-lg mx-auto gap-1">
      <h2 className="text-center text-2xl font-semibold mb-4">Login</h2>
      <input type="text" placeholder="username" className="px-4 py-2 border" />
      <input
        type="password"
        placeholder="password"
        className="px-4 py-2 border"
      />
      <Link to="/register" className="italic text-sm underline text-right">
        Create a account?
      </Link>
      <button className="border px-4 py-2 text-white bg-black">Login</button>{" "}
    </form>
  );
}

export default LoginPage;
