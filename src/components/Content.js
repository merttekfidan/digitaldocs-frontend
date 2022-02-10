import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

function Content() {
    const [data,setData] = useState(null)
    const fetchData = async()=>{
        try {
            const result= await (await axios.get('http://127.0.0.1:8000/api/v1/documents'))
            setData(result.data.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(async()=>{
        await fetchData();
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

export default Content;