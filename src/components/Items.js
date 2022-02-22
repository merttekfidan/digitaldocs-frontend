import React,{useState,useEffect} from 'react'
import Card from './Card'
import Api from './../api'
const api = new Api();


function Items() {
    const [data,setData] = useState(null)

    useEffect(()=>{
        api.getAllDocs()
            .then(res=>setData(res.data.data.data))
            .catch(err=>{throw err})
    },[])
    return ( 
        <div className="container-fluid">
            <h1 className="mt-4">Simple Sidebar</h1>
            <div className='d-flex'>
                {data !==null ? data.map((e,i)=>{
                    return (<Card key={i} data={e}/>)
                }):''}
            </div>
        </div>
     );
}

export default Items;