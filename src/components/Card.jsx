import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import '../styles/Card.css'

import github from '../assets/img/media-logos/github-logo.svg';
import linkedin from '../assets/img/media-logos/linkedin-logo.svg';
import instagram from '../assets/img/media-logos/instagram-logo.svg';

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
					<img src={props.img} alt="photo" className="cardPhoto" draggable="false"></img>
					<h1 className="cardTitle">{props.name}</h1>
					<p className="cardDesc">{props.desc}</p>
					<div className="cardMedia">
						<a href={props.github}><img src={github} alt="github" className="mediaLogo github" draggable="false"/></a>
						<a href={props.linkedIn}><img src={linkedin} alt="linkedIn" className="mediaLogo linkedIn" draggable="false"/></a>
						<a href={props.instagram}><img src={instagram} alt="instagram" className="mediaLogo instagram" draggable="false"/></a>
					</div>
				</div>
			</div>
		</>
	);
};