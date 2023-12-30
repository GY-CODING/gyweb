import React from 'react';
import { GlowCapture } from "@codaworks/react-glow";
import '../styles/AboutUsPage.css';
import { Card } from './Card';

export function AboutUsPage() {
    const GFIGUERAS_NAME        = "Guillermo Figueras";
    const GFIGUERAS_DESC        = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    const GFIGUERAS_GITHUB      = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    const GFIGUERAS_LINKEDIN    = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    const GFIGUERAS_INSTAGRAM   = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    
    const TOXYC_NAME        = "Iván Vicente";
    const TOXYC_DESC        = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    const TOXYC_GITHUB      = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    const TOXYC_LINKEDIN    = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    const TOXYC_INSTAGRAM   = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

    return (
        <div id="aboutUs" className="aboutUsPage">
            <header className="aboutUsTitle">
                <h1>ABOUT US</h1>
            </header>
            <div className="gyMembers">
                <Card 
                    identifier="gfigueras"
                    name={GFIGUERAS_NAME}
                    desc={GFIGUERAS_DESC}
                    github={GFIGUERAS_GITHUB}
                    linkedIn={GFIGUERAS_LINKEDIN}
                    instagram={GFIGUERAS_INSTAGRAM}
                />
                <Card 
                    identifier="toxyc"
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
                <div className=" ball5"></div>
            </div>
        </div>
    );
}
