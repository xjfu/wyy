// import aboutReducer from '../store/about/reducer'
import * as actionType from './constants'
import {
    Map
} from 'immutable'
const initState = Map({
    albumDesc: {},
    albumNewest: [],
    albumComment:[],
    albumCommentTatal: 0,
    albumAll:[],
    
})

function albumReducer(state = initState, action) {
    switch (action.type) {
        case actionType.ALBUMDESC:
            return state.set("albumDesc", action.albumDesc)
        case actionType.ALBUMNEWEST:
            return state.set("albumNewest", action.albumNewest)
        case actionType.ALBUMCOMMENT:
            return state.set("albumComment", action.albumComment)
        case actionType.ALBUMCOMMENTTATAL:
            return state.set("albumCommentTatal", action.albumCommentTatal)
        case actionType.ALBUMNAll:
            return state.set("albumAll", action.albumAll)
        case actionType.ALBUMNAllCOUNT:
            return state.set("albumAllCount", action.albumAllCount)
        default:
            return state

    }
   
}

export default albumReducer;
