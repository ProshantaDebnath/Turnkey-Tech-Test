import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
                <div className={styles.navbar}>
                <a className="navbar-brand" href="#" style={{fontWeight:'bold', fontSize:'30px'}}>Turnkey Tech</a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className={styles.navitem}>
                    <ul className="navbar-nav m-3">
                    <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Services</a>
                        </li><li className="nav-item">
                            <a className="nav-link active" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            
                            <button type="button" className="btn btn-success">Get QUOTE</button>
                                                
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar