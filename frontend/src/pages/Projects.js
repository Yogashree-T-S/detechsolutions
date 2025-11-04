import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../api';

export default function Projects(){
  const [projects, setProjects] = useState([]);
  useEffect(() => { fetchProjects().then(setProjects).catch(()=>{}) }, []);
  return (
    <div className="container">
      <h2>Projects</h2>
      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))'}}>
        {projects.map(p => (
          <div className="card" key={p._id}>
            <h4>{p.title}</h4>
            <p>{p.description}</p>
            {p.url && <a href={p.url} target="_blank" rel="noreferrer">View</a>}
          </div>
        ))}
      </div>
    </div>
  );
}
