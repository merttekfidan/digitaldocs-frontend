import React from 'react'
import favicon from './../logo.svg'
function Content() {
    return ( 
        <div className="container-fluid">
            <h1 className="mt-4">Simple Sidebar</h1>
            <div className="card" style={{width: '18rem'}}>
                <img src={favicon} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
     );
}

export default Content;