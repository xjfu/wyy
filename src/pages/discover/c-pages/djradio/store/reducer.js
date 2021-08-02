import * as actionType from './constants';
import {
    Map
} from 'immutable'
const initState = Map({
    // 歌单
   djProgramRecommend:[],
})

function reducer(state = initState, action) {
    switch (action.type) {
        case actionType.DJPROGRAMRECOMMEND:
            return state.set("djProgramRecommend", action.djProgramRecommend)
        default:
            return state
    }

}

export default reducer;