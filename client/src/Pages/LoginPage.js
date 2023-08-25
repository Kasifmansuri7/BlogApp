import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post("/login", { username, password });
  }

  return (
    <form
      className="flex flex-col max-w-lg mx-auto gap-1"
      onSubmit={handleSubmit}
    >
      <h2 className="text-center text-2xl font-semibold mb-4">Login</h2>
      <input
        type="text"
        placeholder="username"
        className="px-4 py-2 border"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        className="px-4 py-2 border"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to="/register" className="italic text-sm underline text-right">
        Create a account?
      </Link>
      <button className="border px-4 py-2 text-white bg-black">Login</button>{" "}
    </form>
  );
}

export default LoginPage;
