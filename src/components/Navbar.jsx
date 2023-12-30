import '../styles/Navbar.css'
import logo from '../assets/img/logo.png'

export function Navbar() {
    const TITLE             = "GyCODING"
    const LIST_PROJECTS     = "PROJECTS"
    const LIST_ABOUT_US     = "ABOUT US"
    
    return (
        <div className="navbar">
            <div className="leftSide">
                <a href="#main"><img className="navbarLogo" src={logo} alt="gyLogo" draggable="false" /></a>
                <a href="#main" className="navbarTitle">{TITLE}</a>
            </div>
            <div className="rightSide">
                <a href="#projects" className="element">{LIST_PROJECTS}</a>
                <a href="#aboutUs" className="element">{LIST_ABOUT_US}</a>
            </div>
        </div>
    )
}