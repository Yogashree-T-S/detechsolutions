import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  // Replace "mldoqrbp" with your own Formspree form ID
  const [state, handleSubmit] = useForm("mldoqrbp");

  if (state.succeeded) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '40px' }}>
        <h2>✅ Message Sent!</h2>
        <p>Thank you for contacting <strong>DE Tech Solutions</strong>. We'll get back to you soon.</p>
        <a href="/contact" style={{
          marginTop: '20px',
          display: 'inline-block',
          background: 'var(--accent)',
          color: '#fff',
          padding: '10px 16px',
          borderRadius: '8px',
          textDecoration: 'none'
        }}>Send Another Message</a>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <div style={{ maxWidth: 700 }}>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" placeholder="Your full name" required />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" placeholder="you@example.com" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Write your message..." required />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
