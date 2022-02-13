import axios from 'axios'
export default class Api {
    constructor(){
        this.api_url = process.env.REACT_APP_ENDPOINT;
    }

    getAllDocs = async () =>{
        return await axios.get(this.api_url);
    }

}