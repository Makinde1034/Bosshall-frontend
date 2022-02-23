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

export interface video {
    _id : string,
    title : string,
    url : string,
    likes : number,
    channelId : string,
    channelImage : string
}