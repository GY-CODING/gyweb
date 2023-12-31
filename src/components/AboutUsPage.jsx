import React from 'react';
import '../styles/AboutUsPage.css';
import { Card } from './Card';

import gfiguerasIMG from '../assets/img/personal/gfigueras-photo.webp'
import toxycIMG from '../assets/img/personal/toxyc-photo.webp'

export function AboutUsPage() {
    const TITLE                 = "ABOUT US";

    const GFIGUERAS_NAME        = "Guillermo Figueras";
    const GFIGUERAS_DESC        = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    const GFIGUERAS_GITHUB      = "https://github.com/GFigueras03";
    const GFIGUERAS_LINKEDIN    = "https://www.linkedin.com/in/guillermo-figueras-jiménez-b2997a240/";
    const GFIGUERAS_INSTAGRAM   = "https://www.instagram.com/guiillee_.03/";
    
    const TOXYC_NAME        = "Iván Vicente";
    const TOXYC_DESC        = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    const TOXYC_GITHUB      = "https://github.com/srtoxyc";
    const TOXYC_LINKEDIN    = "https://www.linkedin.com/in/srtoxyc/";
    const TOXYC_INSTAGRAM   = "https://www.instagram.com/srtoxyc/";

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
                    instagram={GFIGUERAS_INSTAGRAM}
                />
                <Card 
                    identifier="toxyc"
                    img={toxycIMG}
                    name={TOXYC_NAME}
                    desc={TOXYC_DESC}
                    github={TOXYC_GITHUB}
                    linkedIn={TOXYC_LINKEDIN}
                    instagram={TOXYC_INSTAGRAM}
                />
                <div className="ball ball1"></div>
                <div className="ball ball2"></div>
                <div className="ball ball3"></div>
                <div className="ball ball4"></div>
            </div>
        </div>
    );
}
