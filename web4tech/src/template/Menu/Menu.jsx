import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../../img/logo-h-vjobs.png'


export default menu  => (
    <nav className="navbar navbar-inverse">
        <ul className="nav nav-pills">
            <li>
                <Link to="/"> <img src={logo} alt="logo" className="logo" /> </Link>
            </li>
            <li className="style-lis">
                <Link to="/vagas"> Vagas </Link>
            </li>
            <li className="style-lis">
                 <Link to="/sobre"> Sobre </Link>
            </li>
        </ul>
    </nav>
)