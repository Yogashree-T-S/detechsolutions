import React, { useState } from 'react';
import { postContact } from '../api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  function validate() {
    if (!form.name.trim()) return 'Name required';
    if (!form.email.match(/^\S+@\S+\.\S+$/)) return 'Valid email required';
    if (!form.message.trim() || form.message.length < 10)
      return 'Message must be 10+ characters';
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ type: 'error', text: err });
      return;
    }

    try {
      const res = await postContact(form);
      if (res.success) {
        setStatus({ type: 'success', text: 'Message sent successfully!' });
        localStorage.setItem('lastContact', JSON.stringify(form));
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', text: res.error || 'Server error' });
      }
    } catch (error) {
      // If backend is offline, save in localStorage
      const saved = JSON.parse(localStorage.getItem('unsentContacts') || '[]');
      saved.push({ ...form, savedAt: new Date().toISOString() });
      localStorage.setItem('unsentContacts', JSON.stringify(saved));

      setStatus({
        type: 'error',
        text:
          'Server offline. Message saved locally and will be sent later automatically.',
      });
    }
  }

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <div style={{ maxWidth: 700 }}>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your full name"
              required
            />
          </div>
          <div className="form-row">
            <label>Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="form-row">
            <label>Message</label>
            <textarea
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Write your message here..."
              required
            />
          </div>
          <button type="submit">Send Message</button>

          {status && (
            <div
              style={{
                marginTop: 12,
                color: status.type === 'error' ? 'crimson' : 'green',
              }}
            >
              {status.text}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
