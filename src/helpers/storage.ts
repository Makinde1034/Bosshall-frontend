
export const saveToken = (token : string) =>{
    return localStorage.setItem("token",token)
} 

export const getToken = () =>{
    return localStorage.getItem("token")
}

export const saveUserImage = (user : string) =>{
    return localStorage.setItem("img", user )
}



