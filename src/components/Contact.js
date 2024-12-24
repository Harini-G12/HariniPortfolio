import React, { useState } from "react";
import "../styles.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} required />
        <label>Message:</label>
        <textarea name="message" onChange={handleChange} required></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
