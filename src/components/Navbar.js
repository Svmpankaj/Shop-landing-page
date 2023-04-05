import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    }, [location]);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand mx-5 my-3" to="/"><img src="./images/logo.png" width="50%" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${useLocation.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${useLocation.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${useLocation.pathname === "/services" ? "active" : ""}`} aria-current="page" to="/">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${useLocation.pathname === "/menu" ? "active" : ""}`} aria-current="page" to="/">Menu</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${useLocation.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${useLocation.pathname === "/videos" ? "active" : ""}`} aria-current="page" to="/">Videos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${useLocation.pathname === "/contact Us" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="What you want to eat?" aria-label="Search" />
                            <button className="btn btn-outline-success mx-5" type="submit" style={{ borderRadius: "50px", border: "1px solid" }}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
