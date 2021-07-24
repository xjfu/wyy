import {
    FIRSTLOAD,
    SONGIOF,
    SONGLIST,
} from './constants.js'
import * as actionType from './constants'
import instance from '@/services/request'
import {
    getRandomNumber,
    parseLyric,
} from '@/utils/playlist'



export const songDetail = (songInf) => {
    return {
        type: SONGIOF,
        songInf: songInf,
    }
}


// 歌曲列表
export const songListAction = (songList) => {
    return {
        type: SONGLIST,
        songList: songList,
    }
}



// 获取歌曲信息
export const getSongDetail = (id) => {
    return (dispatch, getState) => {
        instance({
            method: 'get',
            url: '/song/detail',
            params: {
                ids: id
            }
        }).then(res => {
            
            // 添加到播放列表
            const songList = getState().play.get('songList')
            const songIndex = songList.findIndex((song) => song.id === id)
            
            if (songIndex !== -1) return
            
            const willAddSong = res.songs && res.songs[0]
            songList.push(willAddSong)
            // console.log(willAddSong);
            dispatch(songDetail(willAddSong))
            dispatch(songListAction(songList))

            // dispatch(songlist)
        }).catch(err => {
            console.log(err);
        })
    }

}

// 首次加载Action
export const changeFirstLoad = (firstLoad) => {
    return {
        type: FIRSTLOAD,
        firstLoad: firstLoad,
    }
}


// 播放歌曲顺序
export const changePlaySequence = (playSequence) => ({
    
        type: actionType.PLAYSEQUENCE,
        playSequence: playSequence,
    
})

// 播放歌曲index
export const changePlayIndex = (currentSongIndex) => ({

    type: actionType.CURRENTSONGINDEX,
    currentSongIndex: currentSongIndex,

})

// 切换歌曲
export const changeCurrentIndexAndSongAction = (tag) => {

     return (dispatch, getState) => {

        // 播放类型
        const playSequence = getState().play.get('playSequence')
        // 播放列表
        const playList = getState().play.get('songList')
        let currentSongIndex = getState().play.get("currentSongIndex")
        
        switch (playSequence) {
            case 1:
                // 随机得到一个数
                let random = getRandomNumber(playList.length)
                
                while (random === currentSongIndex) {
                    random = getRandomNumber(playList.length)
                }
                currentSongIndex = random
                break;
            default:
                currentSongIndex += tag
                break;
        }
        
        if (currentSongIndex >= playList.length) {
            currentSongIndex = 0
        }
        if (currentSongIndex < 0) {
           currentSongIndex = playList.length - 1
        }
        const song = playList[currentSongIndex]
        
        dispatch(songDetail(song))
        dispatch(changePlayIndex(currentSongIndex))

     }
         

}


// 获取歌词

export const SongLyric = (songLyric) => ({

    type: actionType.SONGLYRIC,
    songLyric: songLyric,

})

// 获取歌曲信息
export const getSongLyric = (id) => {
    return (dispatch, getState) => {
        instance({
            method: 'get',
            url: '/lyric',
            params: {
                id: id
            }
        }).then(res => {
            // console.log(res.lrc.lyric)
            const lyricList = parseLyric(res.lrc.lyric)
            // 添加到播放列表
            

            dispatch(SongLyric(lyricList))
        }).catch(err => {
            console.log(err);
        })
    }

}

// 获取歌词 通过id

export const songIdLyricInf = (songIdLyricInf) => ({

    type: actionType.SONGIDLYRICINF,
    songIdLyricInf: songIdLyricInf,
})

export const getSongIdLyricInf = (id) => {
    return (dispatch, getState) => {
        instance({
            method: 'get',
            url: '/lyric',
            params: {
                id: id
            }
        }).then(res => {
            // console.log(res.lrc.lyric)
            const lyricList = parseLyric(res.lrc.lyric)
            // 添加到播放列表
            dispatch(songIdLyricInf(lyricList))
        }).catch(err => {
            console.log(err);
        })
    }

}

// 改变当前歌词index
export const changeSongLyricIndex = (songLyricIndex) => ({

    type: actionType.SONGLYRICINDEX,
    songLyricIndex: songLyricIndex,

})




// 通过id获取歌词详情
export const songIdInf = (songIdInf) => {
    return {
        type: actionType.SONGIDINF,
        songIdInf: songIdInf,
    }
}

// id获取获取歌曲信息
export const getSongIdInf = (id) => {
    return (dispatch, getState) => {
        instance({
            method: 'get',
            url: '/song/detail',
            params: {
                ids: id
            }
        }).then(res => {

            // 添加到播放列表

            const willAddSong = res.songs && res.songs[0]
            
            dispatch(songIdInf(willAddSong))

        }).catch(err => {
            console.log(err);
        })
    }

}

