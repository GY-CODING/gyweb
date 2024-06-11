import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import '../styles/Card.css'

import { FaGithubSquare,  FaLinkedin } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";


export function Card(props) {
	useEffect(() => {
		VanillaTilt.init(document.querySelectorAll('.tiltCard'), {
			max: 3,
			speed: 150,
			glare: true,
			// 'max-glare': 1,
		});
	}, []);

	return (
		<>
			<div id={props.identifier} className="tiltCard">
				<div className="cardContent">
					<img src={props.img} alt="photo" className="cardPhoto" draggable="false"></img>
					<h1 className="cardTitle">{props.name}</h1>
					<p className="cardDesc" dangerouslySetInnerHTML={{ __html: props.desc }} />
					<div className="cardMedia">
						<a href={props.github} rel="noreferrer noopener" target="_blank"><FaGithubSquare className="mediaLogo github"/></a>
						<a href={props.linkedIn} rel="noreferrer noopener" target="_blank"><FaLinkedin className="mediaLogo linkedIn"/></a>
						<a href={props.instagram} rel="noreferrer noopener" target="_blank"><MdContactPage className="mediaLogo instagram"/></a>
					</div>
				</div>
			</div>
		</>
	);
}