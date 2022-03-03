import Navbar from './../Navbar'
import Navigation from './../Navigation'

function Main({children}) {
    return (
        <>
            <div className="d-flex" id="wrapper">
                <Navbar />
                <div id="page-content-wrapper">
                    <Navigation />
                    {children}
                </div>
            </div>
        </>);
}

export default Main;