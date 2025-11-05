import React from "react";

export default function Projects() {
  // Hardcoded projects data
  const projects = [
    {
      _id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with cart, payment gateway, and admin dashboard built using MERN stack.",
      url: "https://example.com/ecommerce",
    },
    {
      _id: 2,
      title: "Portfolio Website",
      description:
        "A sleek personal portfolio built with React and hosted on Netlify to showcase skills and projects.",
      url: "https://example.com/portfolio",
    },
    {
      _id: 3,
      title: "Mobile Chat App",
      description:
        "A real-time chat application using React Native and Firebase with offline messaging capability.",
      url: "https://example.com/chatapp",
    },
    {
      _id: 4,
      title: "Data Dashboard",
      description:
        "Interactive Power BI dashboards integrated with SQL Server to visualize company-wide KPIs.",
      url: "https://example.com/dashboard",
    },
    {
      _id: 5,
      title: "Cloud Automation Tool",
      description:
        "AWS Lambda–based automation system that handles EC2 scaling, resource monitoring, and alerts.",
      url: "https://example.com/cloudtool",
    },
  ];

  return (
    <div className="container">
      <h2>Our Projects</h2>
      <div className="grid services">
        {projects.map((p) => (
          <div className="card" key={p._id}>
            <h4>{p.title}</h4>
            <p>{p.description}</p>
            {p.url && (
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "8px",
                  color: "var(--accent)",
                  fontWeight: "500",
                }}
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
