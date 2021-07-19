import {
    RECOMMEND,
    HOTRECOMMEND,
    TOPPLAYLIST,
    ALBUMNEWEST,
    TOPLISTQUICK,
    TOPLISTNEW,
    TOPLISTORIGINAL,
    ARTISTLISTSINGER,
} from './constants.js'
import instance from '../../../../../services/request'

export const getRecommandAction = (recommends) => {
    return {
        type: RECOMMEND,
        recommend: recommends,
    }
}

export const changeRecommandAction = () => {
    return dispatch => {
        instance({
            method: 'post',
            url: '/banner',
            data: {
                openId: "",
                userId: ""
            }
        }).then(res => {
            // console.log(res)
            dispatch(getRecommandAction(res.banners))
        }).catch(err => {
            console.log(err);
        })
    }
    // axios({
    //     url: "http://123.207.32.32:8000/home/multidata",
    // }).then((res) => {
    //     const data = res.data.data

    //     dispatch(getRecommandAction(data.banner.list))
    // })

}



export const hotAction = (hotRecommend) => {
    return {
        type: HOTRECOMMEND,
        hotRecommend: hotRecommend,
    }
}

export const getHotAction = (limit) => {
    return (dispatch) => {
        instance({
            method: 'get',
            url: '/playlist/highquality/tags',
            data: {
                openId: "",
                userId: ""
            }
        }).then(res => {
            // console.log(res)
            dispatch(hotAction(res.tags))
        }).catch(err => {
            console.log(err);
        })
    }

}

export const topPlayListAction = (topPlayList) => {
    return {
        type: TOPPLAYLIST,
        topPlayList: topPlayList,
    }
}

export const getTopPlayListAction = (dispatch) => {
    instance({
        method: 'post',
        url: '/top/playlist/highquality',
        data: {
            limit: "20",
            userId: ""
        }
    }).then(res => {
        // console.log(res)
        dispatch(topPlayListAction(res.playlists))
    }).catch(err => {
        console.log(err);
    })

}




export const albumNewest = (albumNewest) => {
    return {
        type: ALBUMNEWEST,
        albumNewest: albumNewest,
    }
}

export const getAlbumNewestAction = (limit) => {
    return (dispatch) => {
        instance({
            method: 'get',
            url: '/album/newest',

        }).then(res => {
            // console.log(res)
            dispatch(albumNewest(res.albums))
        }).catch(err => {
            console.log(err);
        })
    }

}



export const topListQuick = (topListQuick) => {
    return {
        type: TOPLISTQUICK,
        topListQuick: topListQuick,
    }
}

export const getTopListQuick = (id) => {
    return (dispatch) => {
        instance({
            method: 'post',
            url: '/playlist/detail',
            params: {
                id: id
            }
        }).then(res => {
            // console.log(res)
            dispatch(topListQuick(res.playlist.tracks))
        }).catch(err => {
            console.log(err);
        })
    }

}


export const topListNew = (topListNew) => {
    return {
        type: TOPLISTNEW,
        topListNew: topListNew,
    }
}

export const getTopListNew = (id) => {
    return (dispatch) => {
        instance({
            method: 'post',
            url: '/playlist/detail',
            params: {
                id: id
            }
        }).then(res => {
            // console.log(res)
            dispatch(topListNew(res.playlist.tracks))
        }).catch(err => {
            console.log(err);
        })
    }

}


export const topListOrigin = (topListOrigin) => {
    return {
        type: TOPLISTORIGINAL,
        topListOrigin: topListOrigin,
    }
}

export const getTopListOrigin = (id) => {
    return (dispatch) => {
        instance({
            method: 'post',
            url: '/playlist/detail',
            params: {
                id: id
            }
        }).then(res => {
            // console.log(res)
            dispatch(topListOrigin(res.playlist.tracks))
        }).catch(err => {
            console.log(err);
        })
    }

}


export const artistListSinger = (artistListSinger) => {
    return {
        type: ARTISTLISTSINGER,
        artistListSinger: artistListSinger,
    }
}

export const getArtistListSinger = () => {
    return (dispatch) => {
        instance({
            method: 'get',
            url: '/top/artists',
            params: {
                cat: 5002,
                limit: 5,
            }
        }).then(res => {
            // console.log(res)
            dispatch(artistListSinger(res.artists))
        }).catch(err => {
            console.log(err);
        })
    }

}