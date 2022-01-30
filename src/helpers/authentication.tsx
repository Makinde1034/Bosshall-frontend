export const isAuthenticated = () =>{
    const isLoggedIn = localStorage.getItem("token")

    if(isLoggedIn){
        return true
    }else{
        return false
    }
}