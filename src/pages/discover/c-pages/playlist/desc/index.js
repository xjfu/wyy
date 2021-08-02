import React, {
    memo,
    useEffect,
} from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import {
    WrapXJFPlaylist
} from './style'
import XJFTopMenu from '@/components/topmenu';
import {
    getPlayListDetailAction,
    getPlayListCommentAction
} from '../store/createaction';
import {
    getParamSearch
} from '@/utils/tools';
import XJFComments from '@/pages/play/songLyric/comments'
import XJFDbpages from '@/pages/play/dbpages';

function XJFPlaylist(props) {
    const {
        location
    } = props

    const {
        id,
    } = getParamSearch(location.search)

    // redux
    const dispatch = useDispatch()
    const {
        playListDetail,
        playListComment,
        
        commentTotal,
        dpIndex,
    } = useSelector((state) => ({
        playListDetail: state.playList.get("playListDetail"),
        playListComment: state.playList.get("playListComment"),
        commentTotal: state.playList.get("commentTotal"),
        dpIndex: state.play.get("dpIndex"),
        
    }), shallowEqual)
    useEffect(() => {
        dispatch(getPlayListDetailAction(id))
        dispatch(getPlayListCommentAction(id, (20), (dpIndex-1)*20))
    }, [dispatch, id, dpIndex])
    const tracks = playListDetail && playListDetail.tracks
    // console.log(tracks)
    console.log(commentTotal)
    return (
        <WrapXJFPlaylist>
            <XJFTopMenu></XJFTopMenu>
            <div className="w980">
                <pre>
                    {
                        playListDetail.description
                    }
                </pre>
                {
                    tracks && tracks.map((item, index) => {
                    return <li key={item.name}>{item.name}</li>
                })}
                <XJFComments comments={playListComment}></XJFComments>  
                
                <XJFDbpages count={commentTotal} onePage={20}></XJFDbpages>

            </div>
        </WrapXJFPlaylist>
        
    )
}


export default memo(XJFPlaylist);



