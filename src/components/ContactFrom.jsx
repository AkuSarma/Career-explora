import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="wrapper">
      <div className="inner">
        <form onSubmit={handleSubmit}>
          <h3>Contact Us</h3>
          <p>
            Feel free to contact us for any query that you have. We will get
            back to you as soon as possible.
          </p>
          <label className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={handleInputChange}
              required
            />
            <span>Your Name</span>
          </label>
          <label className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
            />
            <span>Your Email</span>
          </label>
          <label className="form-group">
            <textarea
              className="form-control"
              name="message"
              value={message}
              onChange={handleInputChange}
              required
            />
            <span>Your Message</span>
          </label>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
