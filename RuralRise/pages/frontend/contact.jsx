import React, { useState } from "react";
import NavBar from "@/components/NavBar";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send the data to a server

    console.log("Form data submitted:", formData);

    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <div>
      <NavBar />
      <div className="contact-form mt-24 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <hr className="w-3/9 h-1 bg-green-600 mx-auto mb-4 my-4 mx-10" />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
             <label
              htmlFor="message"
              className="block text-lg font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            //   placeholder="Your Name"
              className="w-full py-3 px-4 rounded-full border focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="mb-4">
             <label
              htmlFor="message"
              className="block text-lg font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            //   placeholder="Your Email"
              className="w-full py-3 px-4 rounded-full border focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="mb-4">
             <label
              htmlFor="message"
              className="block text-lg font-semibold mb-2"
            >
             Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            //   placeholder="Your Phone Number"
              className="w-full py-3 px-4 rounded-full border focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="mb-4">
             <label
              htmlFor="message"
              className="block text-lg font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
            //   placeholder="Your Message"
              className="w-full py-3 px-4 rounded-lg border focus:outline-none focus:border-green-500"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full mx-auto block"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
