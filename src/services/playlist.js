import request from './request';
export function getPlayList(order,limit, offset, cat) {
    return request({
        url: '/top/playlist',
        params: {
            order,
            limit,
            offset,
            cat,
        },
    })
}
export function getPlayListDetail(id) {
    return request({
        url: '/playlist/detail',
        params: {
           id
        },
    })
}

export function getPlayListComment(id, limit, offset) {
    return request({
        url: '/comment/playlist',
        params: {
            id,
            limit, 
            offset,
        },
    })
}