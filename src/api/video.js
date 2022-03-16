import axios  from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL


export default {
    
    uploadVideo(data){
        return axios({
            url : `${BASE_URL}/api/upload-video`,
            method : 'POST',
            headers : {
                "x-access-token" : localStorage.getItem("token")
            },
            data : data
        })
    },

    getRandomVideos(){
        return axios({
            url : `${BASE_URL}/api/get-random-videos`,
            method : "GET"
        })
    },

    getVideo(id){
        return axios({
            url : `${BASE_URL}/api/get-video/${id}`,
            method : "GET"
        })
    },

    getRelatedVideos(id){
        return axios({
            url : `${BASE_URL}/api/get-related-videos/${id}`,
            method : "GET",
           
        })
    },

    searchVideo(data){
        return axios({
            url : `${BASE_URL}/api/search-video?text=${data.text}`,
            method : "GET",
            
        })
    }

}