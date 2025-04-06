import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <button style={{ 
          padding: '10px 20px', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer',
          marginTop: '10px'
        }}>
          Go Home
        </button>
      </Link>
    </div>
  );
}

export default Missing;
