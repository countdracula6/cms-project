import React from 'react';
import '../assets/Filters.css';

const Filters = () => {
  return (
    <div className="filters-container">
      <select className="filter-select">
        <option value="">Select Area</option>
        <option value="morumbi">Morumbi</option>
        <option value="brooklin">Brooklin</option>
        <option value="itaim-bibi">Itaim Bibi</option>
        <option value="vila-olimpia">Vila Olímpia</option>
        <!-- Add more areas later -->
      </select>

      <select className="filter-select">
        <option value="">Select Type</option>
        <option value="escort-services">Escort Services</option>
        <option value="escort-massage">Escort + Massage</option>
        <option value="massage-only">Massage Only</option>
        <option value="corporate">Corporate</option>
      </select>

      <select className="filter-select">
        <option value="">Select Age</option>
        <option value="21-25">21-25</option>
        <option value="26-30">26-30</option>
        <option value="31-35">31-35</option>
        <option value="36-40">36-40</option>
        <option value="41-50">41-50</option>
      </select>
    </div>
  );
};

export default Filters;
