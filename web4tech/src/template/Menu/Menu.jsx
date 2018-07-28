import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../../img/logo-h-vjobs.png'


export default props  => (
    <nav className="navbar avbar-expand-lg navbar-inverse">
        <div className="">
            <div className="col-md-9 col-sm-9 col-xm-9">
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
            </div>
            
            <div className="col-md-1 col-sm-1 col-xm-1">
                <li className="logout">
                    <label>{props.name}</label>
                </li>
            </div>

            <div className="col-md-1 col-sm-1 col-xm-1">
                <li className="logout">
                    <a className=" text-white" onClick={()=>props.logout()}>
                        <i className="fa fa-sign-out-alt"></i>
                    </a>
                </li>
            </div>
        </div>
    </nav>
)