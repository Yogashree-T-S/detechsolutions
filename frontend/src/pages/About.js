import React from 'react';

export default function About(){
  const team = [
    { name: 'Alice - CEO', role: 'Vision & Strategy' },
    { name: 'Bob - CTO', role: 'Tech & Architecture' },
    { name: 'Charlie - PM', role: 'Delivery' }
  ];
  return (
    <div className="container">
      <h2>About Us</h2>
      <p>DE Tech Solutions Pvt. Ltd. is a technology-driven company specialising in software development, AI, and digital transformation services.</p>
      <h3>Vision</h3>
      <p>To enable organizations with next-generation solutions that drive innovation and efficiency.</p>
      <h3>Team</h3>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:12}}>
        {team.map((m,i)=>(
          <div className="card" key={i}>
            <h4>{m.name}</h4>
            <p>{m.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
