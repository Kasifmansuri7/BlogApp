import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, SetLoginError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post("/register", {
      username,
      email,
      password,
    });
    if (response.data.code === 11000 || response.status !== 200) {
      SetLoginError("Registration failed.");
    }
    setUsername("");
    setPassword("");
    setEmail("");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-lg mx-auto gap-1"
    >
      <h2 className="text-center text-2xl font-semibold mb-4">Register</h2>
      {loginError && (
        <span className="text-red-500 text-center">{loginError}</span>
      )}
      <input
        required
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
        className="px-4 py-2 border"
      />
      <input
        required
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email"
        className="px-4 py-2 border"
      />
      <input
        required
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
