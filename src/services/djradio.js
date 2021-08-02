import request from './request';

export function getDjProgramRecommend() {
    return request({
        url: '/program/recommend',
       
    })
}