// import aboutReducer from '../store/about/reducer'
import {
    RECOMMEND,
    HOTRECOMMEND,
    TOPPLAYLIST,
    ALBUMNEWEST,
    TOPLISTQUICK,
    TOPLISTNEW,
    TOPLISTORIGINAL,
    ARTISTLISTSINGER,
    
} from './constants'
import {
    Map
} from 'immutable'
const initState = Map({
    recommend:[],
    hotRecommend: [],
    topPlayList:[],
    albumNewest: [],
    topListQuick: [],
    topListNew: [],
    topListOrigin:[],
    artistListSinger:[],
    // 歌单
    playList:[],
    // 歌单详情
    playListDetail:{},
})

function aboutReducer(state = initState, action) {
    switch (action.type) {
        case RECOMMEND:
            return state.set("recommend", action.recommend)

            
        case HOTRECOMMEND:
            return state.set("hotRecommend", action.hotRecommend)
           
        case TOPPLAYLIST:
            return state.set("topPlayList", action.topPlayList)
            
        case ALBUMNEWEST:
            return state.set("albumNewest", action.albumNewest)
         case TOPLISTQUICK:
            return state.set("topListQuick", action.topListQuick)

           

        case TOPLISTNEW:
            return state.set("topListNew", action.topListNew)
            
        case TOPLISTORIGINAL:
            return state.set("topListOrigin", action.topListOrigin)
           
        case ARTISTLISTSINGER:

            return state.set("artistListSinger", action.artistListSinger)
        default:
            return state

    }
   
}

export default aboutReducer;
