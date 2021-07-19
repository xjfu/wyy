export function getImgFormat(url, width, height) {
    const path = url + "?param=" + width + "y" + height
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
