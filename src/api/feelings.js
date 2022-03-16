import axios from 'axios'
const BASE_URL = process.env.REACT_APP_BASE_URL



export default {

    likeUnlikVideo(data){
       return axios({
            url : `${BASE_URL}/api/like-unlike`,
            method : "POST",
            headers : {
                "x-access-token" : localStorage.getItem("token") 
            },
            data : data
        })
    },

    checkVideoLike(data){
        return axios({
            url : `${BASE_URL}/api/check-video-like`,
            method : "POST",
            headers : {
                "x-access-token" : localStorage.getItem("token") 
            },
            data : data
        })
    }
}