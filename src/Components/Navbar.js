import { NavLink, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import '../Styles/Navbar.css'
import bg from '../Assets/bg.mp4'
import {PacmanLoader} from 'react-spinners'

function Navbar(){

    const [loading, setLoading]=useState(false);

    useEffect(()=>{

    },[loading])

    return (
        <>
        {!loading?
            <>
                    <div className="navbar-spinner">
                        <PacmanLoader color="#333" loading={!loading} size={20} />
                    </div>
                    <video autoPlay='true' loop muted preload='auto' onCanPlayThrough={()=>{setLoading(!loading)}}>
                        <source src={bg}/>
                    </video>
            </>
           : <>
            <header>
                <NavLink activeClassName="active" className="header-link" to="/divyansh-resume/">Home</NavLink>
                <NavLink activeClassName="active" className="header-link" to="/divyansh-resume/education">Education</NavLink>
                <NavLink activeClassName="active" className="header-link" to="/divyansh-resume/work-experience">Work Experience</NavLink>
                <NavLink activeClassName="active" className="header-link" to="/divyansh-resume/skills">Skills</NavLink>
                <NavLink activeClassName="active" className="header-link" to="/divyansh-resume/contacts">Contacts</NavLink>
            </header>
            <video autoPlay='true' loop muted preload='auto'>
                        <source src={bg}/>
            </video>
            <Outlet/>
            </>
        }
        </>
    )
}

export {Navbar}