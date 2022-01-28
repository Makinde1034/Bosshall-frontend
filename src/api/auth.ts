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
    }
}