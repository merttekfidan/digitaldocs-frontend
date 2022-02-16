import React from 'react'
import NavbarItems from './NavbarItems'
import { Link } from "react-router-dom";
function Navbar (){
    return(
            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
                <div className="list-group list-group-flush">
                    <NavbarItems data={{title:'test',link:'#'}}/>
                    <Link to="/Test">Test</Link>
                </div>
            </div>)
}

export default Navbar;