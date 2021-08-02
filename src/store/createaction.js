// function addAction(num) {
//     return {
//         type: "ADD_NUMBER", 
//         num:5,
//     }
// }
// export default addAction;
// import axios from 'axios'

// import {
//     RECOMMEND,
// } from './constants.js'
// 推荐


// thunk
// export const getHomeDataAction = (dispatch, getState) => {
    
//     axios({
//         url: "http://123.207.32.32:8000/home/multidata",

//     }).then((res) => {
//         const data = res.data.data
//         console.log("data,", data)

//         dispatch(changeRecommandAction(data.banner.list))
//     })
   
    
// }

// export const getRecommandAction = (recommends) => {
//     return {
//         type: RECOMMEND,
//         recommend:recommends,
//     }
// }


// redux-saga 拦截的action
// export const changeRecommandAction = (dispatch) => {
//     axios({
//     url: "http://123.207.32.32:8000/home/multidata",

//     }).then((res) => {
//         const data = res.data.data
//         console.log("data,", data)

//         dispatch(getRecommandAction(data.banner.list))
//     })

// }
