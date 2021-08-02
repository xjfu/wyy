import request from './request';

export function getAlbumDesc(id) {
    return request({
        url: '/album',
        params: {
            id,
        },
    })
}

export function getAlbumNewest(id) {
    return request({
        url: '/album/newest',
        params: {
            id,
        },
    })
}

export function getAlbumComment(id, limit, offset) {
    return request({
        url: '/comment/album',
        params: {
            id,
            limit,
            offset,
        },
    })
}

export function getAlbumAll(limit, offset, area) {
    return request({
        url: '/album/new',
        params: {
            limit,
            offset,
            area,
        },
    })
}