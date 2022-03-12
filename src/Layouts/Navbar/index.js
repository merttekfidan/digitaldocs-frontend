import {Link} from 'react-router-dom'
import NavbarItems from './NavbarItems'

function Navbar (){
    return(
            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
                <div className="list-group list-group-flush">
                    <NavbarItems data={{title:'test',link:'/'}}/>
                    <Link to='/' >Dashboard</Link>
                    <Link to='/test' >Test</Link>
                    <Link to='/test2' >Test2</Link>
                </div>
            </div>)
}

export default Navbar;