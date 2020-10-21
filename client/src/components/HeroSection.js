import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='https://myronbankbank.s3-ap-southeast-1.amazonaws.com/video-3.mp4' autoPlay loop muted />
      <h1>Top news in a glance</h1>
      <p>Have an idea of what's happening around the world.</p>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;