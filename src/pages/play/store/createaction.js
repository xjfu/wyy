import {
    SONGIOF,
    
} from './constants.js'
import instance from '@/services/request'
export const SongDetail = (songInf) => {
    return {
        type: SONGIOF,
        songInf: songInf,
    }
}

export const getSongDetail = (id) => {
    return (dispatch) => {
        instance({
            method: 'get',
            url: '/song/detail',
            params: {
                ids: id
            }
        }).then(res => {
            dispatch(SongDetail(res.songs))
        }).catch(err => {
            console.log(err);
        })
    }

}