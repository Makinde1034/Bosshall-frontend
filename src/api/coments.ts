import axios  from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL

export default {
    createComment(data : any){

        return axios({
            url : `${BASE_URL}/api/create-comment`,
            data : data,
            method : "POST",
            headers : {
                "x-access-token" : localStorage.getItem("token")
            }
        })
    },

    getComments(id:any){
        return axios({
            url : `${BASE_URL}/api/get-video-comments/${id}`,
            method : "GET",
            // headers : {
            //     "x-access-token" : localStorage.getItem("token")
            // }

        })
    },

    // get comment replies
    getCommentReplies(id : any){
        return axios({
            url : `${BASE_URL}/api/get-comment-replies/${id}`,
            method : "GET",
            
        })
    }
}
