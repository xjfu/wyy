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

const initState = {
    recommend:[],
    hotRecommend: [],
    topPlayList:[],
    albumNewest: [],
    topListQuick: [],
    topListNew: [],
    topListOrigin:[],
    artistListSinger:[],
}

function aboutReducer(state = initState, action) {
    switch (action.type) {
        case RECOMMEND:

            return {
                ...state,
                recommend: action.recommend
            }
        case HOTRECOMMEND:
            return {
                ...state,
                hotRecommend: action.hotRecommend
            }
        case TOPPLAYLIST:
            return {
                ...state,
                topPlayList: action.topPlayList
            }
        case ALBUMNEWEST:
            return {
                ...state,
                albumNewest: action.albumNewest
            }
         case TOPLISTQUICK:
             return {
                 ...state,
                 topListQuick: action.topListQuick
             }

        case TOPLISTNEW:
            return {
                ...state,
                topListNew: action.topListNew
            }
        case TOPLISTORIGINAL:
            return {
                ...state,
                topListOrigin: action.topListOrigin
            }
        case ARTISTLISTSINGER:
            return {
                ...state,
                artistListSinger: action.artistListSinger
            }
        default:
            return state

    }
   
}

export default aboutReducer;
