// src/components/TopBar.jsx

import React from 'react';
import './TopBar.css'; // If you prefer external CSS

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="icon">🏠</div>
      <div className="icon">🔖</div>
      <div className="icon">📤</div>
      <div className="icon">✉️</div>
    </div>
  );
};

export default TopBar;
