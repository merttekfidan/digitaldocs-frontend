import Navbar from './../Navbar'
import Navigation from './../Navigation'

function Main(props) {
    return (
        <>
            <div className="d-flex" id="wrapper">
                <Navbar />
                <div id="page-content-wrapper">
                    <Navigation />
                    {props.content}
                </div>
            </div>
        </>);
}

export default Main;