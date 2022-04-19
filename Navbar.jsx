import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

    const isActiveStyle = (navData) => navData.isActive ? "nav-link active" : "nav-link"

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">

                <a className="navbar-brand" href="/">
                    <i className="fa-solid fa-user-astronaut"></i>
                    <span className='ml-2'>Sebastian</span>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className={isActiveStyle} to="/calendar/dashboard">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={isActiveStyle} to="/">Features</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={isActiveStyle} to="/">Pricing</NavLink>
                        </li>
                    </ul>
                </div>

            </div>

            <button className="btn btn-outline-danger">Logout</button>
        </nav>
    )
}
