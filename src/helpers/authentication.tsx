import api from '../api/auth'


export const isAuthenticated = async() =>{
    const token = localStorage.getItem("token");

    if(token){
        return true
    }else{
        return false
    }

    
}