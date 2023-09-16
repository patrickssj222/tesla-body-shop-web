import React from 'react';
import './ModelSelect.scss';
import modelX from 'asset/img/whiteModelX.png';

export function ModelSelect() {
  return (
    <div className="container">
      <div className="navbar">
        <p className="navbarText">Tesla Body Shop</p>
      </div>
      <div className="body">
        <h1>Select Your Model</h1>
        <div className="modelCard">
          <img className="modelImage" src={modelX} alt="Model X" />
          <p> Model X </p>
        </div>
      </div>
    </div>
  );
}
