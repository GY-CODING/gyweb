import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import '../styles/Card.css'

export function Card(props) {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.tiltCard'), {
      max: 3,
      speed: 150,
      glare: true,
      'max-glare': 0.1,
    });
  }, []);

  return (
    <>
      <div id={props.identifier} className="tiltCard">
        <div className="cardContent">
          <h1 className="cardTitle">{props.name}</h1>
          <p className="cardDesc">{props.desc}</p>
          <div className="cardMedia">
            <a href={props.github}><img src="" alt="github" className="github" /></a>
            <a href={props.linkedIn}><img src="" alt="linkedIn" className="linkedIn" /></a>
            <a href={props.instagram}><img src="" alt="instagram" className="instagram" /></a>
          </div>
        </div>
      </div>
    </>
  );
};