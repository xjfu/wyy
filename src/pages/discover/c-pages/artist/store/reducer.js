// import aboutReducer from '../store/about/reducer'
import {
 HOTARTISTLIST,
 HOTARTISTSONGLIST,
 
 ALBUMARTISTSONGLIST,
 MVARTISTSONGLIST,
 DESCARTISTSONGLIST,
} from './constants'
import {Map} from 'immutable'
const initState = Map({

    

    // HOTARTISTLIST 热门歌手列表
    hotArtistList: [],
    hotArtistSongList: [],
    albumArtistSongList: [],
    mvArtistSongList: [],
    descArtistSongList: {},
})

function reducer(state = initState, action) {
    switch (action.type) {
      
        case HOTARTISTLIST:
            return state.set("hotArtistList", action.hotArtistList)
        case HOTARTISTSONGLIST:
            return state.set("hotArtistSongList", action.hotArtistSongList)
        case ALBUMARTISTSONGLIST:
            return state.set("albumArtistSongList", action.albumArtistSongList)
        case DESCARTISTSONGLIST:
            return state.set("descArtistSongList", action.descArtistSongList)
        case MVARTISTSONGLIST:
            return state.set("mvArtistSongList", action.mvArtistSongList)
        default:
            return state

    }
   
}

export default reducer;
