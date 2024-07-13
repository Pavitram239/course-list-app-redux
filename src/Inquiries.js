import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitInquiry } from "./actions/actions"; // Import action

const Inquiries = () => {
  const [inquiryData, setInquiryData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInquiryData({ ...inquiryData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(submitInquiry(inquiryData)); // Dispatch action to submit inquiry
    setInquiryData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div>
      <h2>General Inquiries</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={inquiryData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={inquiryData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          value={inquiryData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Inquiry</button>
      </form>
    </div>
  );
};

export default Inquiries;
