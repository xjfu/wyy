import {
    FIRSTLOAD,
    SONGIOF,
    SONGLIST,
} from './constants.js'
import * as actionType from './constants'
import instance from '@/services/request'
import {getRandomNumber} from '@/utils/playlist'


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
            console.log(songIndex)
            if (songIndex !== -1) return
            
            const willAddSong = res.songs && res.songs[0]
            songList.push(willAddSong)
          
            dispatch(songDetail(res.songs))
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


// 切换歌曲
export const changeCurrentIndexAndSongAction = (tag) => {

     return (dispatch, getState) => {

        // 播放类型
        const playSequence = getState().play.get('playSequence')
        // 播放列表
        const playList = getState().play.get('playList')
        switch (playSequence) {
            case 1:
                // 随机得到一个数
                let random = getRandomNumber(playList.length)
                
                while (random === currentSongIndex) {
                    random = getRandomNumber(playList.length)
                }
                break;
        
            default:
                break;
        }

     }
         

}
