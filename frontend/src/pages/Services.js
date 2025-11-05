import React from "react";

export default function Services() {
  // Hardcoded services data
  const services = [
    {
      id: 1,
      title: "Web Development",
      desc: "We build scalable, secure, and modern web apps using React, Node.js, and MongoDB.",
    },
    {
      id: 2,
      title: "Mobile App Development",
      desc: "We design and develop cross-platform mobile applications using React Native and Flutter.",
    },
    {
      id: 3,
      title: "Cloud Solutions",
      desc: "Deploy and scale with AWS, Azure, or Google Cloud. We handle cloud architecture and DevOps automation.",
    },
    {
      id: 4,
      title: "UI/UX Design",
      desc: "Beautiful, intuitive interfaces crafted to enhance user experience and business engagement.",
    },
    {
      id: 5,
      title: "Data Analytics & BI",
      desc: "Gain insights from your data with dashboards, reports, and analytics powered by Power BI and Tableau.",
    },
    {
      id: 6,
      title: "SEO & Digital Marketing",
      desc: "Boost your online presence with strategic SEO, content optimization, and performance tracking.",
    },
  ];

  return (
    <div className="container">
      <h2>Our Services</h2>
      <div className="grid services">
        {services.map((s) => (
          <div key={s.id} className="card">
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
