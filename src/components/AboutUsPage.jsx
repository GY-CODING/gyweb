import React, { useState, useEffect } from 'react';
import '../styles/AboutUsPage.css';
import { Card } from './Card';

import gfiguerasIMG from '../assets/img/personal/gfigueras-photo.webp'
import toxycIMG from '../assets/img/personal/toxyc-photo.webp'

export function AboutUsPage() {
    const TITLE                 = "ABOUT US";

    const GFIGUERAS_NAME        = "Guillermo Figueras";
    const GFIGUERAS_DESC        = "Entusiasta de la tecnología que desde su infancia ha desarrollado una pasión por el hardware y el ensamblaje de ordenadores. Como técnico en sistemas microinformáticos y redes, encuentra satisfacción resolviendo desafíos tecnológicos.<br /><br />Actualmente, se encuentra en su segundo año de estudios en desarrollo de aplicaciones multiplataforma y cuenta con experiencia en Java/Kotlin, SQL y CSS.<br />Su dedicación y conocimientos en el mundo de la tecnología son la base para aportar soluciones innovadoras a cualquier proyecto.";
    const GFIGUERAS_GITHUB      = "https://github.com/gy-gfigueras";
    const GFIGUERAS_LINKEDIN    = "https://www.linkedin.com/in/gfigueras/";
    const GFIGUERAS_PORTFOLIO   = "https://gfigueras.com";
    
    const TOXYC_NAME            = "Iván Vicente";
    const TOXYC_DESC            = "Apasionado del desarrollo de 21 años.<br />Desde la adolescencia, se ha sumergido en el fascinante mundo de la programación, enfocándose especialmente en el desarrollo de videojuegos y el desarrollo back-end.<br /><br />Su interés se extiende al desarrollo full-stack, y cuenta con experiencia en Java/Kotlin, JavaScript y SQL. Además, posee un nivel de inglés casi-nativo (C1).<br />Su pasión y habilidades suponen una importante adición a proyectos innovadores.";
    const TOXYC_GITHUB          = "https://github.com/gy-toxyc";
    const TOXYC_LINKEDIN        = "https://www.linkedin.com/in/srtoxyc/";
    const TOXYC_PORTFOLIO       = "https://toxyc.dev";

    return (
        <div id="aboutUs" className="aboutUsPage">
            <header className="aboutUsTitle">
                <h1>{TITLE}</h1>
            </header>

            <div className="gyMembers">
                <Card
                    identifier="gfigueras"
                    img={gfiguerasIMG}
                    name={GFIGUERAS_NAME}
                    desc={GFIGUERAS_DESC}
                    github={GFIGUERAS_GITHUB}
                    linkedIn={GFIGUERAS_LINKEDIN}
                    instagram={GFIGUERAS_PORTFOLIO}
                />
                <Card 
                    identifier="toxyc"
                    img={toxycIMG}
                    name={TOXYC_NAME}
                    desc={TOXYC_DESC}
                    github={TOXYC_GITHUB}
                    linkedIn={TOXYC_LINKEDIN}
                    instagram={TOXYC_PORTFOLIO}
                />
                <div className="ball ball1"></div>
                <div className="ball ball2"></div>
                <div className="ball ball3"></div>
                <div className="ball ball4"></div>
            </div>
        </div>
    );
}