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
    channelName : string
    time : Date
    views : number
}

export interface channel {
    _id : string,
    name : string,
    image : string 
    subscribers : number

    
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

export interface reply {
    _id: string
    reply: string
    commentId : string
    owner: string
    time : Date
    users: {
        
        fullname: string
        userImage: string,
        
    }
}