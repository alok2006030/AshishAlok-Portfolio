import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.user_name.trim()) {
      newErrors.user_name = 'Name is required';
    }
    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      newErrors.user_email = 'Invalid email format';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    emailjs
      .sendForm(
        "service_nt1lev3",
        "template_anl93k6",
        form.current,
        "WioWqszLWdr3AyTuL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setFormData({ user_name: '', user_email: '', message: '' });
          form.current.reset();
          setTimeout(() => setDone(false), 5000);
        },
        (error) => {
          console.log(error.text);
          setDone(false);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? 'white' : '#f5f0e0' }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail} noValidate>
          <div className="form-group">
            <input
              type="text"
              name="user_name"
              className={`user ${errors.user_name ? 'error' : ''}`}
              placeholder="Your Name"
              value={formData.user_name}
              onChange={handleChange}
              aria-label="Your name"
              aria-required="true"
            />
            {errors.user_name && <span className="error-message">{errors.user_name}</span>}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="user_email"
              className={`user ${errors.user_email ? 'error' : ''}`}
              placeholder="Your Email"
              value={formData.user_email}
              onChange={handleChange}
              aria-label="Your email"
              aria-required="true"
            />
            {errors.user_email && <span className="error-message">{errors.user_email}</span>}
          </div>
          <div className="form-group">
            <textarea
              name="message"
              className={`user ${errors.message ? 'error' : ''}`}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              aria-label="Your message"
              aria-required="true"
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
          <input
            type="submit"
            value={loading ? "Sending..." : "Send"}
            className="button"
            disabled={loading}
          />
          {done && (
            <span className="success-message">Thanks for contacting me! I'll get back to you soon.</span>
          )}
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;