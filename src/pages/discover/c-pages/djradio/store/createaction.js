import * as actionType from './constants';
import {
    getDjProgramRecommend,
    getDjProgramTopList,
} from '@/services/djradio';



// 电台推荐节目

export const djProgramRecommendAction = (djProgramRecommend) => {
    return {
        type: actionType.DJPROGRAMRECOMMEND,
        djProgramRecommend: djProgramRecommend,
    }
}

export const getDjProgramRecommendAction = (order, limit, offset, cat) => {
    return (dispatch, getState) => {
        getDjProgramRecommend().then((res) => {
            const djProgramRecommend = res.programs
            // console.log(playList);
            dispatch(djProgramRecommendAction(djProgramRecommend))
        })
    }

}

// 节目排行版
export const djProgramTopListAction = (djProgramTopList) => {
    return {
        type: actionType.DJPROGRAMRTOPLIST,
        djProgramTopList: djProgramTopList,
    }
}

export const getDjProgramTopListAction = (order, limit, offset, cat) => {
    return (dispatch, getState) => {
        getDjProgramTopList().then((res) => {
            const djProgramTopList = res.toplist
            console.log(djProgramTopList);
            dispatch(djProgramTopListAction(djProgramTopList))
        })
    }

}

// 歌单详情
