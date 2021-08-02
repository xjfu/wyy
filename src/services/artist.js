import request from './request';

export function getHotArtistList(limit, offset) {
    return request({
        url: '/top/artists',
        params: {
            limit,
            offset,
        },
    });
}

export function getHotSongArtistList(id) {
    return request({
        url: '/artist/top/song',
        params: {
            id,
            
        },
    });
}
// 歌手专辑
export function getAlbumSongArtistList(id, limit, offset) {
    return request({
        url: '/artist/album',
        params: {
            id,
            limit,
            offset,
        },
    });
}
// 歌手mv
export function getMvSongArtistList(id, limit, offset) {
    return request({
        url: '/artist/mv',
        params: {
            id,
            limit,
            offset,
        },
    });
}

// 歌手mv
export function getDescSongArtistList(id, limit, offset) {
    return request({
        url: '/artist/desc',
        params: {
            id,
            limit,
            offset,
        },
    });
}