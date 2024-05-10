// src/components/Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    // setform({
    //   email: "",
    //   password: "",
    // });

    const data = await response.text();
    console.log(data);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        New user?{" "}
        <Link to="/signup">
          <span style={{ fontWeight: "bold" }}>Signup</span>
        </Link>
      </p>
    </div>
  );
};

export default Login;
