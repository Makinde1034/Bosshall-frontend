import api from '../api/auth'


export const isAuthenticated = async () =>{

    const res = await api.verifyAccess();

    return res

    
}