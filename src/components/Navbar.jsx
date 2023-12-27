import '../styles/Navbar.css'
import logo from '../assets/img/logo.png'

export function Navbar() {
    return (
        <div className='navbar'>
            <div className='leftSide'>
                <img src={logo} alt="gyLogo" />
                <h3>GyCODING</h3>
            </div>
            <div className='rightSide'>
                <h3 className='element'>PROJECTS</h3>
                <h3 className='element'>ABOUT US</h3>
            </div>
        </div>
    )
}