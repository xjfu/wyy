import * as actionType from './constants'
import {
    getAlbumDesc,
    getAlbumNewest,
    getAlbumComment,
    getAlbumAll,
} from '@/services/album'

// 专辑描述
export const AlbumDescAction = (albumDesc) => {
    return {
        type: actionType.ALBUMDESC,
        albumDesc: albumDesc,
    }
}


export const getAlbumDescAction = (id) => {
    return (dispatch, getState)=>{
        getAlbumDesc(id).then((res) => {
            const albumDesc = res && res.album
            dispatch(AlbumDescAction(albumDesc))
        })
    }
    

}

// 新碟上架
export const AlbumNewestAction = (albumNewest) => {
    return {
        type: actionType.ALBUMNEWEST,
        albumNewest: albumNewest,
    }
}


export const getAlbumNewestAction = (id) => {
    return (dispatch, getState) => {
        getAlbumNewest(id).then((res) => {
            // console.log(res.albums)
            const albumNewest = res && res.albums
            dispatch(AlbumNewestAction(albumNewest))
        })
    }


}
// 全部新碟数量
export const AlbumAllCountAction = (albumAllCount) => {
    return {
        type: actionType.ALBUMNAllCOUNT,
        albumAllCount: albumAllCount,
    }
}

// 全部新碟列表
export const AlbumAllAction = (albumAll) => {
    return {
        type: actionType.ALBUMNAll,
        albumAll: albumAll,
    }
}

export const getAlbumAllAction = (limit, offset, area) => {
    return (dispatch, getState) => {
        getAlbumAll(limit, offset, area).then((res) => {
            // console.log(res.albums)
            const albumAll = res && res.albums
            const albumAllCount = res && res.total
            dispatch(AlbumAllCountAction(albumAllCount))
            dispatch(AlbumAllAction(albumAll))
        })
    }


}
// 专辑评论总数
export const AlbumCommentTatalAction = (albumCommentTatal) => {
    return {
        type: actionType.ALBUMCOMMENTTATAL,
        albumCommentTatal: albumCommentTatal,
    }
}

// 专辑评论
export const AlbumCommentAction = (albumComment) => {
    return {
        type: actionType.ALBUMCOMMENT,
        albumComment: albumComment,
    }
}


export const getAlbumCommentAction = (id, limit, offset) => {
    return (dispatch, getState) => {
        getAlbumComment(id, limit, offset).then((res) => {
            // console.log(res)
            const albumComment = res && res.comments
            const total = res.total
            dispatch(AlbumCommentAction(albumComment))
            dispatch(AlbumCommentTatalAction(total))
        })
    }


}


