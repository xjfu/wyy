// import moment from 'moment'
var moment = require('moment');
moment.locale();


export const log = console.log.bind(console)

export function getImgFormat(url, width, height) {
   
    const path = url + "?param=" + width + "y" + height
    return path

    
    
}

export function getImgBlur(url) {
    const path = url+"?imageView&blur=40x20"
    return path
}




export function getTimeFormat(d) {
    
    let second = parseInt(d) / 1000
    // console.log(second)
    let minute = 0
    if (second > 60) {
        minute = Math.floor(second / 60);
        second = Math.floor(second % 60);
    } 
   
    if (second < 10) {
        second = '0'+Math.floor(second)
        minute = '0' + minute
        // return '0' + minute + ":" + second
    }
    if(second >= 10 && second <= 60) {
        second = Math.floor(second)
        minute = "0"+minute
        
    }
    return minute + ":"+ second
    
    
}


export function getSongSrc(id) {
    return "http://music.163.com/song/media/outer/url?id="+id
}


export function getParamSearch(parameSeach) {
    const params = parameSeach.slice(1).split("&")
    let o = {}
    for (let i = 0; i < params.length; i++) {
        const kv = params[i].split("=")
        const key = kv[0]
        const value = kv[1]
        o[key] = value
    }
    return o
    // ?id=1863201974 &&_hash=songlist-1860567964

}

// 时间戳转换

export function formMatDate(time) {
    const now = new Date().getTime()
    const start = Math.floor(time / 1000)
    const end = Math.floor(now / 1000)
    const durationTime = end - start

    if (durationTime < 60) {
        return "刚刚"
    } else if ((durationTime) >= 60 && (durationTime) < 60 * 60) {
        
        return parseInt(durationTime / 60) + "分钟前"
    } 

    let o_y = moment(time).get('year')
    let y = moment(now).get('year')
    let o_m = moment(time).get("month") + 1
    let m = moment(now).get("month") + 1
    let o_d = moment(time).get('date')
    let d = moment(now).get('date')
    let hms = moment(time).format("HH:mm:ss")
    if (o_y === y && o_m === m && o_d === d) {
        return hms
    } else if (o_y === y && o_m === m && o_d === d - 1) {
        return "昨天" + hms
    } else if (o_y === y) {
        return o_m + "月" + o_d + "日" + hms
    }
     else {
        return o_y + "年" + o_m + "月"+o_d + "日" + hms
    }
    

    // ?id=1863201974 &&_hash=songlist-1860567964

}