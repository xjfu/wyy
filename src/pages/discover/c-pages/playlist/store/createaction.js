import * as actionType from './constants';
import {
    getPlayList,
    getPlayListDetail,
    getPlayListComment,
} from '@/services/playlist';



// 歌单页面
export const playListAction = (playList) => {
    return {
        type: actionType.PLAYLIST,
        playList: playList,
    }
}

export const getPlayListAction = (order, limit, offset, cat) => {
    return (dispatch, getState) => {
        getPlayList(order, limit, offset, cat).then((res)=>{
            const playList = res.playlists
            // console.log(playList);
            dispatch(playListAction(playList))
        })
    }

}

// 歌单详情
export const playListDetailAction = (playListDetail) => {
    return {
        type: actionType.PLAYLISTDETAIL,
        playListDetail: playListDetail,
    }
}

export const getPlayListDetailAction = (id, s) => {
    return (dispatch, getState) => {
        getPlayListDetail(id, s).then((res) => {
            const playListDetail = res.playlist
            // console.log(playListDetail);
            dispatch(playListDetailAction(playListDetail))
        })
    }
}


// 歌单评论总数

export const playListCommentTotalAction = (commentTotal) => {
    return {
        type: actionType.PLAYLISTCOMMENTTATAL,
        commentTotal: commentTotal,
    }
}
// 歌单评论

export const playListCommentAction = (playListComment) => {
    return {
        type: actionType.PLAYLISTCOMMENT,
        playListComment: playListComment,
    }
}
export const getPlayListCommentAction = (id, limit, offset) => {
    return (dispatch, getState) => {
        getPlayListComment(id, limit, offset).then((res) => {
            const playListComment = res.comments
            const total = res.total
            // console.log(playListComment);
            dispatch(playListCommentAction(playListComment))
            dispatch(playListCommentTotalAction(total))
        })
    }
}
