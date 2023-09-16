import React from 'react';
import stockVideo from 'asset/video/stockVideo.mp4';
import './Home.scss';

export function Home() {
  return (
    <div className="container">
      <div className="navbar">
        <p className="navbarText">Tesla Body Shop</p>
      </div>
      <div className="body">
        <p />
        <h1 className="title">Just a title</h1>
        <button className="button" type="button">Start Building</button>
      </div>
      <video className="video" autoPlay loop muted>
        <source src={stockVideo} type="video/mp4" />
      </video>
    </div>
  );
}
