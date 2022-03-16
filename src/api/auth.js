import axios,{AxiosRequestConfig}  from "axios";
// import type  { userDetails } from "../types";
const BASE_URL = process.env.REACT_APP_BASE_URL

export default {
    register(data){
        return axios({
            url : `${BASE_URL}/api/register`,
            method : "POST",
            data : data
        })
    },

    login(data){
        return axios({
            url: `${BASE_URL}/api/login`,
            method : "POST",
            data : data
        })
    },

    updateProfile(data){
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
    },
    
    verifyAccess(){
        return axios({
            url : `${BASE_URL}/api/verifyAccess`,
            method : "POST",
            headers : {
                "x-access-token" : localStorage.getItem("token")
            }
        })
    }
}

