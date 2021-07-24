export function getRandomNumber(d) {

    return Math.floor(Math.random() * d)


}
function changetime(t) {
    const ts = t.split('.')
    const h_second = parseInt(ts[1])
    const minute = parseInt(ts[0].split(":")[0])
    const second = parseInt(ts[0].split(":")[1])
    return minute * 60 * 1000 + second * 1000 + h_second

}
export function parseLyric(lyricStr) {

    const lyricList = []
    const lyric = lyricStr.split('\n')
    
    for (let i = 0; i < lyric.length; i++) {
        const lrc = lyric[i];
        if (lrc) {
            const time = lrc.split(']')[0].slice(1).trim()
            const t = changetime(time)
            const content = lrc.split(']')[1].trim()
            const lineObj = {
                t,
                content,
            };
            lyricList.push(lineObj)
        }
    }
    return lyricList

}


export function scrollTo(element, to, duration) {
    // 当前播放时间
    if (duration <= 0) return;
    // 目标-当前距离的卷曲的top
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function () {
        
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}