// import aboutReducer from '../store/about/reducer'
import {
  SONGIOF,
  SONGLIST,
  FIRSTLOAD,
  PLAYSEQUENCE,
  CURRENTSONGINDEX,
  SONGLYRIC,
  SONGLYRICINDEX,
  SONGIDLYRICINF,
  SONGIDINF,
} from './constants'
import {Map} from 'immutable'
const initState = Map({
    songInf:{
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
    },
 
    songList: [
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
        },
        {
      name: '有何不可',
      id: 167876,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 5771,
          name: '许嵩',
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '600902000007916021',
      fee: 8,
      v: 49,
      crbt: null,
      cf: '',
      al: {
        id: 16953,
        name: '自定义',
        picUrl:
          'https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg',
        tns: [],
        pic_str: '18590542604286213',
        pic: 18590542604286212,
      },
      dt: 241840,
      h: {
        br: 320000,
        fid: 0,
        size: 9675799,
        vd: -21099,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5805497,
        vd: -18400,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3870346,
        vd: -16900,
      },
      a: null,
      cd: '1',
      no: 3,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 8192,
      originCoverType: 0,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      mst: 9,
      cp: 14026,
      rtype: 0,
      rurl: null,
      publishTime: 1231516800000,
        },
        {
        name: '雅俗共赏',
        id: 411214279,
        pst: 0,
        t: 0,
        ar: [
            {
            id: 5771,
            name: '许嵩',
            tns: [],
            alias: [],
            },
        ],
        alia: [],
        pop: 100,
        st: 0,
        rt: null,
        fee: 8,
        v: 31,
        crbt: null,
        cf: '',
        al: {
            id: 34749138,
            name: '青年晚报',
            picUrl:
            'https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg',
            tns: [],
            pic: 3431575794705764,
        },
        dt: 249621,
        h: {
            br: 320000,
            fid: 0,
            size: 9987177,
            vd: -22200,
        },
        m: {
            br: 192000,
            fid: 0,
            size: 5992323,
            vd: -19600,
        },
        l: {
            br: 128000,
            fid: 0,
            size: 3994896,
            vd: -17800,
        },
        a: null,
        cd: '1',
        no: 2,
        rtUrl: null,
        ftype: 0,
        rtUrls: [],
        djId: 0,
        copyright: 0,
        s_id: 0,
        mark: 8192,
        originCoverType: 0,
        single: 0,
        noCopyrightRcmd: null,
        mv: 5302271,
        rtype: 0,
        rurl: null,
        mst: 9,
        cp: 14026,
        publishTime: 1461723397683,
        },
        
    ],
    firstLoad: true,
    playSequence: 0, //0循环播放，1,随机播放
    currentSongIndex: 0, //当前音乐播放索引
    songLyricIndex: 0,
    //歌词
    songLyric: [],
    songIdLyricInf: [],
    songIdInf:{},
    
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

        case CURRENTSONGINDEX:
            return state.set("currentSongIndex", action.currentSongIndex)
            
        case SONGLYRIC:
            return state.set("songLyric", action.songLyric)
        case SONGLYRICINDEX:
            return state.set("songLyricIndex", action.songLyricIndex)
        case SONGIDLYRICINF:
            return state.set("songIdLyricInf", action.songIdLyricInf)
        case SONGIDINF:
                return state.set("songIdInf", action.songIdInf)
        default:
            return state

    }
   
}

export default songReducer;
