import React from 'react'
import logo from './../logo.svg';
import NavbarItems from './NavbarItems'
function Navbar (){
    return(
            <div class="border-end bg-white" id="sidebar-wrapper">
                <div class="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
                <div class="list-group list-group-flush">
                    <NavbarItems data={{title:'test',link:'#'}}/>
                </div>
            </div>)
}

export default Navbar;