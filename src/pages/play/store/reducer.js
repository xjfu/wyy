// import aboutReducer from '../store/about/reducer'
import {
  SONGIOF,
  SONGLIST,
  FIRSTLOAD,
  PLAYSEQUENCE,
} from './constants'
import {Map} from 'immutable'
const initState = Map({
    songInf: [
        {
            "name": "不具名海岸",
            "id": 1846419185,
            "pst": 0,
            "t": 0,
            "ar": [{
                "id": 28899411,
                "name": "刘人语",
                "tns": [],
                "alias": []
            }],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 4,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 127707599,
                "name": "不具名海岸",
                "picUrl": "https://p1.music.126.net/7EKhJisb7Iujf1xKndUacw==/109951165994362454.jpg",
                "tns": [],
                "pic_str": "109951165994362454",
                "pic": 109951165994362450
            },
            "dt": 212453,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 8498199,
                "vd": -45051
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 5098937,
                "vd": -42528
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 3399306,
                "vd": -40911
            },
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 1,
            "s_id": 0,
            "mark": 8192,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "resourceState": true,
            "version": 4,
            "single": 0,
            "noCopyrightRcmd": null,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 7001,
            "mv": 14296677,
            "publishTime": 1622044800000
        }
    ],
    songList: [],
    firstLoad: true,
    playSequence: 0, //0循环播放，1,随机播放
})

function songReducer(state = initState, action) {
    switch (action.type) {
        case SONGIOF:

            return state.set('songInf', action.songInf)
        case SONGLIST:

            return state.set('songList', action.songList)

        case FIRSTLOAD:
            return state.set('firstLoad', action.firstLoad)
            
        case PLAYSEQUENCE:
            return state.set('playSequence', action.playSequence)
        
        default:
            return state

    }
   
}

export default songReducer;
