import React from 'react'

import logo from '../../img/logo-h-vjobs.png'


export default menu  => (
    <nav className="navbar navbar-inverse">
        <ul className="nav nav-pills">
            <li>
                <a href=""> <img src={logo} alt="logo" className="logo" /> </a>
            </li>
            <li className="style-lis">
                <a href=""> Vagas </a>
            </li>
            <li className="style-lis">
                 <a href=""> Sobre </a>
            </li>
        </ul>
    </nav>
)