
export const saveToken = (token : string) =>{
    return localStorage.setItem("token",token)
} 

export const getToken = () =>{
    return localStorage.getItem("token")
}

export const saveUserImage = (user : string) =>{
    return localStorage.setItem("img", user )
}
export const saveUserId = (id :string) =>{
    return localStorage.setItem("userId",id)
}



