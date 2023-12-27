import '../styles/Navbar.css'
import logo from '../assets/img/logo.png'

export function Navbar() {
    const TITLE             = "GyCODING"
    const LIST_PROJECTS     = "PROJECTS"
    const LIST_ABOUT_US     = "ABOUT US"

    return (
        <div className='navbar'>
            <div className='leftSide'>
                <img src={logo} alt="gyLogo" draggable="false"/>
                <h3>{TITLE}</h3>
            </div>
            <div className='rightSide'>
                <h3 className='element'>{LIST_PROJECTS}</h3>
                <h3 className='element'>{LIST_ABOUT_US}</h3>
            </div>
        </div>
    )
}