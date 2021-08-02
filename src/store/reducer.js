// import aboutReducer from '../store/about/reducer'
// import {RECOMMEND} from './constants'

// const initState = {
//     recommend:[],
// }
import {
    combineReducers,

} from 'redux'
import {
    albumReducer
} from "@/pages/discover/c-pages/album/store/index"
import {
    playListReducer
} from "@/pages/discover/c-pages/playlist/store/index"
import {
    songReducer,
} from '@/pages/play/store'

import {
    aboutReducer
} from '@/pages/discover/c-pages/recommend/store/index'
import {
    reducer as artistReducer
} from '@/pages/discover/c-pages/artist/store/index'

import {
    reducer as djradioReducer
} from '@/pages/discover/c-pages/djradio/store/index'

const reducer = combineReducers({
    recommend:aboutReducer,
    play:songReducer,
    artist: artistReducer,
    album: albumReducer,
    playList: playListReducer,
    djradio: djradioReducer,
})

export default reducer;
