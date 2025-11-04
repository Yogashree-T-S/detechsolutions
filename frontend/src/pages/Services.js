import React, { useEffect, useState } from 'react';
import { fetchServices } from '../api';

export default function Services(){
  const [services, setServices] = useState([]);
  useEffect(()=>{ fetchServices().then(setServices).catch(()=>{}) }, []);
  return (
    <div className="container">
      <h2>Services</h2>
      <div className="grid services">
        {services.map(s => (
          <div key={s.id} className="card">
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
