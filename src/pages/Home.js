import React from 'react';
import banner from '../assets/food.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="headerContainer">
        <h1>Food Corner</h1>
        <p>Food at a Click</p>
        <Link
          style={{
            textDecoration: 'inherit',
            margin: '4px 2px',
            backgroundColor: 'white',
            fontSize: '26px',
            padding: '12px 28px',
            borderRadius: '12px',
          }}
          to="/menu"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
}

export default Home;
