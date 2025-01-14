
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'



export default function Navbar(){


    return<>
        
        <nav className="navbar navbar-expand-lg  fixed-top    ">
            <div className="container ">
                <div className='title'>
                    <Link className="navbar-brand fw-bolder" to="/">START REACT</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav  w-100   d-flex    justify-content-end ">
                        <li className="nav-item ">
                        <NavLink  className="nav-link  btn btn-n fw-bold" aria-current="page" to="/">HOME</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                        <NavLink className="nav-link fw-bold" to="/Portfolio">PORTFOLIO</NavLink>
                        </li>
                        <li className="nav-item me-3">
                        <NavLink className="nav-link fw-bold" to="/About">ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link fw-bold" to="/Contact">CONTACT</NavLink>
                        </li>
                        
                        
                    </ul>
                
                </div>
            </div>
        </nav>
    
    </>
}