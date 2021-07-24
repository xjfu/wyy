
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
}
from '../store/createaction'
import WrapXJFLyRic from '../songLyric/lyric'

import XJFTopMenu from '@/components/topmenu'
import {getParamSearch} from '@/utils/tools'
function XJFSongLyRic(props) {
    const {
        location
    } = props
    
    const {id} = getParamSearch(location.search)
    
    const dispatch = useDispatch()
    const {
        songIdLyricInf,
        songIdInf,
    } = useSelector((state) => ({
        songIdLyricInf: state.play.get("songIdLyricInf") || [],
        songIdInf: state.play.get("songIdInf") || {},
        
    }), shallowEqual)

    
    useEffect(() => {
        dispatch(getSongIdLyricInf(id))
        dispatch(getSongIdInf(id))
    }, [dispatch,id])
    return (
        <WrapXJFSongLyRic>
            <XJFTopMenu></XJFTopMenu>
            {/* <XJFDiscover></XJFDiscover> */}
            <div className="w980 container" >
                <WrapLeft>
                    <WrapXJFLyRic songIdLyricInf={songIdLyricInf} songIdInf={songIdInf}></WrapXJFLyRic>
                </WrapLeft>
                <WrapRight>

                </WrapRight>
            </div>
        </WrapXJFSongLyRic>
    )
}


export default memo(XJFSongLyRic);
