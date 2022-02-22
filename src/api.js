import axios from 'axios'
export default class Api {
    constructor(){
        this.api_url = process.env.REACT_APP_ENDPOINT;
        this.client = null;
    }
    init = () => {
        let headers = {
            Accept: "application/json",
        };
        this.client = axios.create({
            baseURL: this.api_url,
            timeout: 31000,
            headers: headers,
        });
        return this.client;
    }

    getAllDocs = () =>{
        let route = ''
        return this.init().get('/documents');
    }

    getDoc = (param) => {
        return this.init().get(`/documents/${param}`)
    }

    createDoc = () => {
        let route = ''
        return ''
    }

}