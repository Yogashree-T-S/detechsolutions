import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const loc = useLocation();
  return (
    <nav>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Link to="/" style={{fontWeight:700}}>DE Tech Solutions</Link>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div className="nav-links">
            <Link to="/" className={loc.pathname==='/'? 'active':''}>Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
