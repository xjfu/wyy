import * as actionType from './constants';
import {
    Map
} from 'immutable'
const initState = Map({
    // 歌单
    playList: [],
    // 歌单详情
    playListDetail: {},
    playListComment: [],
    commentTotal: 0,
})

function playListReducer(state = initState, action) {
    switch (action.type) {
        case actionType.PLAYLIST:

            return state.set("playList", action.playList)
        case actionType.PLAYLISTDETAIL:

            return state.set("playListDetail", action.playListDetail)
        case actionType.PLAYLISTCOMMENT:

            return state.set("playListComment", action.playListComment)
        case actionType.PLAYLISTCOMMENTTATAL:

            return state.set("commentTotal", action.commentTotal)

        default:
            return state

    }

}

export default playListReducer;