import axios  from "axios";
import type  { userDetails } from "../types";
const BASE_URL = process.env.REACT_APP_BASE_URL

export default {
    register(data : userDetails){
        return axios({
            url : `${BASE_URL}/api/register`,
            method : "POST",
            data : data
        })
    },

    updateProfile(data : any){
        return axios({
            url : `${BASE_URL}/api/update-profile`,
            method : "POST",
            data : data,
            headers:{
                "x-access-token" : localStorage.getItem("token"),
                'content-type' : 'application/json',
            }
        })
    },
    getUser(){
        return axios({
            url : `${BASE_URL}/api/get-user`,
            method : "GET",
            headers : {
                "x-access-token" : localStorage.getItem("token")
            }
        })
    }
}