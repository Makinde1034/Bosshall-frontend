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
    time : Date
}

export interface channel {
    _id : string,
    name : string,
    image : string 
    
}



export interface comment {
    _id: string
    comment: string
    owner: string
    videoId: string
    time : Date
    users: {
        
        fullname: string
        userImage: string,
        
    }
    
}