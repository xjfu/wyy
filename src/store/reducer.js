// import aboutReducer from '../store/about/reducer'
// import {RECOMMEND} from './constants'

// const initState = {
//     recommend:[],
// }
import {aboutReducer} from '@/pages/discover/c-pages/recommend/store/index'
import {
    songReducer
} from '@/pages/play/store'
import {
    combineReducers, 
    
} from 'redux'

const reducer = combineReducers({
    recommend:aboutReducer,
    play:songReducer,
})

export default reducer;
