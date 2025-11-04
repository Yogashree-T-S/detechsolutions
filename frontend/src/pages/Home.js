import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-left">
          <h1>DE Tech Solutions</h1>
          <p>We empower businesses with innovative, scalable, and efficient tech solutions.</p>
          <Link to="/services" className="cta">Explore Services</Link>
        </div>
        <div style={{minWidth:260}}>
          <div className="card">
            <h3>Why choose us?</h3>
            <ul>
              <li>Experienced developers</li>
              <li>End-to-end solutions</li>
              <li>Focus on performance & UX</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
