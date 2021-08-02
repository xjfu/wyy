
// 歌词详情页面

import React, {
    memo,
    useEffect,
} from 'react'
import {
    shallowEqual,
    useDispatch,
    useSelector,
} from 'react-redux'
import {
    WrapXJFSongLyRic,
    WrapLeft,
    WrapRight,
} from './style'
import {
    getSongIdLyricInf,
    getSongIdInf,
    getSongComments,
} from '../store/createaction'
import XJFDbpages from '../dbpages'
import WrapXJFLyRic from '../songLyric/lyric'
import XJFComments from '../songLyric/comments'
import XJFTopMenu from '@/components/topmenu'
import {getParamSearch} from '@/utils/tools'
function XJFSongLyRic(props) {
    const {
        location
    } = props
    
    const {
        id,
    } = getParamSearch(location.search)
    
    const dispatch = useDispatch()
    const {
        songIdLyricInf,
        songIdInf,
        comments,
        dpIndex,
    } = useSelector((state) => ({
        songIdLyricInf: state.play.get("songIdLyricInf") || [],
        songIdInf: state.play.get("songIdInf") || {},
        comments: state.play.get("comments") || {},
        dpIndex: state.play.get("dpIndex") || 1,
        
    }), shallowEqual)

    
  
    useEffect(() => {
        dispatch(getSongIdLyricInf(id))
        dispatch(getSongIdInf(id))
        dispatch(getSongComments(id, 20, (dpIndex-1)*20))
    }, [dispatch, id, dpIndex])
    const hotComments = comments && comments.hotComments
    const newComments = comments && comments.comments
    const total = comments.total
    return (
        <WrapXJFSongLyRic>
            <XJFTopMenu></XJFTopMenu>
            {/* <XJFDiscover></XJFDiscover> */}
            <div className="w980 container" >
                <WrapLeft>
                    <WrapXJFLyRic songIdLyricInf={songIdLyricInf} songIdInf={songIdInf}></WrapXJFLyRic>
                    
                    <div className="cmt">
                        {hotComments && <h3 className="u-hd4">精彩评论</h3>}
                        <XJFComments comments={hotComments} > </XJFComments>
                        <h3 className="u-hd4">最新评论</h3>
                        <XJFComments comments={newComments} title={"最新评论("+total+")"}> </XJFComments>

                        {/* 页签 */}
                        <XJFDbpages count={total} onePage={20}></XJFDbpages>
                    </div>
                    
                    
                </WrapLeft>
                <WrapRight>

                </WrapRight>
            </div>
       
        </WrapXJFSongLyRic>
    )
}


export default memo(XJFSongLyRic);
