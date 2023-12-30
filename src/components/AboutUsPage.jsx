import React from 'react';
import { GlowCapture } from "@codaworks/react-glow";
import '../styles/AboutUsPage.css';
import { Card } from './Card';

export function AboutUsPage() {
    return (
        <GlowCapture id="aboutUs" className="aboutUsPage">
            <header className="aboutUsTitle">
                <h1>ABOUT US</h1>
            </header>
            <div className="gyMembers">
                <Card />
                <Card />
            </div>
        </GlowCapture>
    );
}
