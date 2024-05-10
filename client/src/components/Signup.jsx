// src/components/Signup.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
    verifyPassword: "",
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
    // Validate form data here before submission
    if (form.password !== form.verifyPassword) {
      alert("Passwords do not match");
      return;
    } else {
      const response = await fetch("/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      console.log(response);
      const res = await response.text();
      console.log(res);
    }

    // console.log(form);
    setform({
      email: "",
      password: "",
      verifyPassword: "",
    });
  };

  return (
    <div>
      <h2>Signup</h2>

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

        <div>
          <label>Verify Password:</label>
          <input
            type="password"
            name="verifyPassword"
            value={form.verifyPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login">
          <span style={{ fontWeight: "bold" }}>Login</span>
        </Link>
      </p>
    </div>
  );
};

export default Signup;
