import NavbarItems from './NavbarItems'

function Navbar (){
    return(
            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
                <div className="list-group list-group-flush">
                    <NavbarItems data={{title:'test',link:'#'}}/>
                </div>
            </div>)
}

export default Navbar;