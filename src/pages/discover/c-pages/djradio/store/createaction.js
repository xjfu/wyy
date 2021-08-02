import * as actionType from './constants';
import {
    getDjProgramRecommend,
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

// 歌单详情
