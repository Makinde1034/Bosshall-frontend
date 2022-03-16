import axios  from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL

export default {
    
    getNotifications(){
        return axios({
            url : `${BASE_URL}/api/get-notifications`,
            headers : {
                "x-access-token" : localStorage.getItem("token")
            }
        })
    }
}