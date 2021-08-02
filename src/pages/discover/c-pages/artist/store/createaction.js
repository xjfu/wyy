import * as actionType from './constants'

import {
    getHotArtistList,
    getHotSongArtistList,
    getAlbumSongArtistList,
    getDescSongArtistList,
    getMvSongArtistList,

} from '@/services/artist'




// 歌曲列表
export const hotArtistList = (hotArtistList) => {
    return {
        type: actionType.HOTARTISTLIST,
        hotArtistList: hotArtistList,
    }
}



// 获取歌曲信息
export const getHotArtistListAction = (limit, offset) => {

    
    return async (dispatch, getState) => {
        await getHotArtistList(limit, offset).then(res => {
            const artists = res && res.artists
            dispatch(hotArtistList(artists))
        })
    }

}
// 热门歌曲列表
export const hotArtisSongtList = (hotArtistSongList) => {
    return {
        type: actionType.HOTARTISTSONGLIST,
        hotArtistSongList: hotArtistSongList,
    }
}



// 获取热门50歌曲
export const getHotArtistSongListAction = (limit, offset) => {


    return async (dispatch, getState) => {
        await getHotSongArtistList(limit, offset).then(res => {
            const hotArtistSongList = res && res.songs
            dispatch(hotArtisSongtList(hotArtistSongList))
        })
    }

}


// 歌手专辑
export const AlbumArtisSongtList = (albumArtistSongList) => {
    return {
        type: actionType.ALBUMARTISTSONGLIST,
        albumArtistSongList: albumArtistSongList,
    }
}



// 获取歌手专辑
export const getAlbumArtistSongListAction = (limit, offset) => {


    return async (dispatch, getState) => {
        await getAlbumSongArtistList(limit, offset).then(res => {
            // console.log(res)
            const albumArtistSongList = res && res.hotAlbums
            dispatch(AlbumArtisSongtList(albumArtistSongList))
        })
    }

}


// 歌手MV
export const mvArtisSongtList = (mvArtistSongList) => {
    return {
        type: actionType.MVARTISTSONGLIST,
        mvArtistSongList: mvArtistSongList,
    }
}



// 获取歌手MV
export const getMvArtistSongListAction = (id, limit, offset) => {


    return async (dispatch, getState) => {
        await getMvSongArtistList(id).then(res => {
            const mvArtistSongList = res && res.mvs
            dispatch(mvArtisSongtList(mvArtistSongList))
        })
    }

}
// 歌手desc
export const descArtisSongtList = (descArtistSongList) => {
    return {
        type: actionType.DESCARTISTSONGLIST,
        descArtistSongList: descArtistSongList,
    }
}



// 获取歌手desc
export const getDescArtistSongListAction = (id, limit, offset) => {


    return async (dispatch, getState) => {
        await getDescSongArtistList(id).then(res => {
            const descArtistSongList = res
            dispatch(descArtisSongtList(descArtistSongList))
        })
    }

}
