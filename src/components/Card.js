import React, { useState, useEffect } from 'react'
import favicon from './../logo.svg'



function Card({ data }) {
    return (
        <div className='cardCustom border'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" />
                        </div>
                        <hr class="dropdown-divider" />
                        <div className="row justify-content-center">
                            <div className="d-flex p-2 text-break text-start m-t-5">
                                <h6 className=''>
                                    Oturum kartı ve şirket sözleşmesi sözleşmesi sözleşmesi sözleşmesisözleşmesisözleşmesisözleşmesisözleşmesi
                                </h6>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>
                                        h3. Lorem ipsum dolor sit amet.
                                    </h3>
                                </div>
                                <div className="col-md-6">
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                </div>
                                <div className="col-md-10">
                                    <h3>
                                        h3. Lorem ipsum dolor sit amet.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Card;