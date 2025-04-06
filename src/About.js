import React from 'react';

const About = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: '#007bff' }}>About GradConnect</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
        Welcome to <strong>GradConnect</strong> – your go-to platform for staying updated with the latest college buzz! 🎓✨  
        Whether it’s campus events, internship opportunities, study tips, or farewell memories,  
        GradConnect keeps you connected with everything happening around you.
      </p>
      
      <h2 style={{ color: '#333', marginTop: '20px' }}>Why GradConnect?</h2>
      <ul style={{ textAlign: 'left', display: 'inline-block', fontSize: '16px', color: '#444' }}>
        <li>📢 Stay updated with college news & events</li>
        <li>📚 Get exam & study tips from peers</li>
        <li>💼 Find internship opportunities & career insights</li>
        <li>🎉 Relive campus moments & share experiences</li>
      </ul>

      <p style={{ marginTop: '20px', fontSize: '16px', color: '#666' }}>
        Join the conversation and make the most of your college life with GradConnect! 🚀  
      </p>
    </div>
  );
}

export default About;
