import * as actionType from './constants';
import {
    Map
} from 'immutable'
const initState = Map({
    // 歌单
   djProgramRecommend:[],
   djProgramTopList:[],
})

function reducer(state = initState, action) {
    switch (action.type) {
        case actionType.DJPROGRAMRECOMMEND:
            return state.set("djProgramRecommend", action.djProgramRecommend)
        case actionType.DJPROGRAMRTOPLIST:
            return state.set("djProgramTopList", action.djProgramTopList)
        default:
            return state
    }

}

export default reducer;