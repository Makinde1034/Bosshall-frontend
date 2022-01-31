export interface userDetails {
    email : string,
    password : string
}

export interface userStateAction {
    userImg :string,
    token : string,
    errMsg : string,
    loading  : boolean,
    updateProfileLoading : boolean
}