import axios  from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL

export default {
    createChannel(data : any){
        return axios({
            url : `${BASE_URL}/api/create-channel`,
            method : "POST",
            headers : {
                "x-access-token" : localStorage.getItem("token")
            },
            data : data
        })
    },
    getChannel(id : any){
        return axios({
            url : `${BASE_URL}/api/get-channel/${id}`,
            method : "GET",

        })
    }
}