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
