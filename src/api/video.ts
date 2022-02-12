import axios  from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL

export default {
   uploadVideo(data : any){
        return axios({
            url : `${BASE_URL}/api/upload-video`,
            method : 'POST',
            headers : {
                "x-access-token" : localStorage.getItem("token")
            },
            data : data
        })
   }
}