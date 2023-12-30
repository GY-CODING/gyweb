import React, { useEffect } from 'react';

import VanillaTilt from 'vanilla-tilt';
import '../styles/Card.css'

export function Card() {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.tilt-card'), {
      max: 10,
      speed: 150,
      // glare: true,
      'max-glare': 0.5,
    });
  }, []);

  return (
    <div className="tilt-card">
      <div className="card-content">
        <h2>Tu Contenido</h2>
        <p>Otra información de la carta</p>
      </div>
    </div>
  );
};