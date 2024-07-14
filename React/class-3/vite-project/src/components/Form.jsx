import { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "" })

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}`)
    console.log("Name:", name);
    console.log("Email:", email);
    setName("");
    setEmail("");
  };

  const handleChange = (event) => {
    const {name, value } = event.target; // email -> updated address
    setFormData({
      ...formData,
      [name]: value
    })

  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        {/* Controlled components */}
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
