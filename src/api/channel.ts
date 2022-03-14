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
            url : `${BASE_URL}/api/get-channel-videos/${id}`,
            method : "GET",

        })
    },
    getUserChannels(id : any){
        return axios({
            url : `${BASE_URL}/api/get-user-channels/${id}`,
            method : "GET"

        })
    },
    getRandomChannels(){
        return axios({
            url : `${BASE_URL}/api/get-random-channels`,
            method : "GET"
        })
    },
    createSubscription(data : any){
        return axios({
            url : `${BASE_URL}/api/subscribe`,
            method : "POST",
            data : data,
            headers : {
                "x-access-token" : localStorage.getItem("token")
            }

        })
    },
    checkSubscription(data : any ){
        return axios({
            url : `${BASE_URL}/api/check-subscription`,
            method : "POST",
            data : data,
            headers : {
                "x-access-token" : localStorage.getItem("token")
            },
        })
    }
}