import "./Form.css";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email_id: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_6xe8ikm",
        "template_qhoz1uy",
        formData,
        "meTXis3_ilTHQGppr"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );

    setFormData({
      from_name: "",
      email_id: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
        />
        <label>E-mail</label>
        <input
          type="email"
          name="email_id"
          value={formData.email_id}
          onChange={handleChange}
        />
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <label>Message</label>
        <textarea
          rows="6"
          name="message"
          placeholder="Enter your Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button className="btn" type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Form;
