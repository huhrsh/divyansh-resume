import { NavLink, Outlet } from "react-router-dom"
import '../Styles/Navbar.css'

function Navbar(){
    return (
        <>
        <header>
            <NavLink activeClassName="active" className="header-link" to="/">Home</NavLink>
            <NavLink activeClassName="active" className="header-link" to="/education">Education</NavLink>
            <NavLink activeClassName="active" className="header-link" to="/work-experience">Work Experience</NavLink>
            <NavLink activeClassName="active" className="header-link" to="/skills">Skills</NavLink>
            <NavLink activeClassName="active" className="header-link" to="/contacts">Contacts</NavLink>
        </header>
        <Outlet/>
        </>
    )
}

export {Navbar}