import React, { useState, useEffect } from 'react'
import{ useParams } from 'react-router-dom'
import dateformat from 'dateformat'
import Api from './../../api'

function DocDetails() {
    let params = useParams();
    return (
        <>
            <h1>Doc Details</h1>
            <h6>{params.id}</h6>
            <div className='container'>
                <div className='row'>
                    <div className='col-md'>Test1</div>
                    <div className='col-md'>Test2</div>
                </div>
            </div>
        </>
     );
}

export default DocDetails;