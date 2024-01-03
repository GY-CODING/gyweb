import { GlowCapture, Glow } from "@codaworks/react-glow"

import fotg_card from "../assets/img/projects-bg/fotg_card_bg.webp"
import maps_card from "../assets/img/projects-bg/maps_card_bg.webp"
import characters_card from "../assets/img/projects-bg/characters_card_bg.webp"

import fotg_logo from "../assets/img/logos/fotg_logo.webp"
import maps_logo from "../assets/img/logos/gfigueras_logo.webp"
import characters_logo from "../assets/img/logos/toxyc_logo.webp"

import '../styles/ProjectsPage.css'

export function ProjectsPage() {
    const TITLE = "PROJECTS";

    return (
        <GlowCapture id="projects" className="projects">
            <header className="projectsTitle">
                <h1>{TITLE}</h1>
            </header>

            <div className="projectsList">
                <Glow>
                    <div className="projectCard fotgCard">
                        <img src={fotg_logo} className="fotgLogo projectLogo" draggable="false"/>
                        <img src={fotg_card} className="fotgBG projectBG" alt="fotg" draggable="false"/>
                    </div>
                </Glow>
                <Glow>
                    <div className="projectCard mapsCard">
                        <img src={maps_logo} className="mapsLogo projectLogo" draggable="false"/>
                        <img src={maps_card} className="mapsBG projectBG" alt="fotg" draggable="false"/>
                    </div>
                </Glow>
                <Glow>
                    <div className="projectCard charactersCard">
                        <img src={characters_logo} className="charactersLogo projectLogo" draggable="false"/>
                        <img src={characters_card} className="charactersBG projectBG" alt="fotg" draggable="false"/>
                    </div>
                </Glow>
                <Glow>
                    <div className="projectCard isaacCard">
                        <img src={fotg_logo} className="isaacLogo projectLogo" draggable="false"/>
                        <img src={fotg_card} className="isaacBG projectBG" alt="fotg" draggable="false"/>
                    </div>
                </Glow>
            </div>
        </GlowCapture>
    )
}