
// 歌词详情页面

import React, {
    memo,
    
} from 'react'
import {
    WrapXJFSinger,
    WrapSingerLeft,
    WrapSingerRight,
}
from './style'
import XJFTopMenu from '@/components/topmenu'
import XJFHot from './hot'

import Topbar from './cnps/topbar'
import XJFAlbum from './album'
import XJFDesc from './desc'
import XJFMv from './mv'
import {
    getParamSearch
} from '@/utils/tools'

function XJFSinger(props) {
    const {
        location
    } = props
    const {
        pathname
    } = location
    const {
        id,
    } = getParamSearch(location.search)
    const changepannel = () => {

        switch (pathname) {

            case "/artist":
                return <XJFHot id={id}></XJFHot>
 
            case "/artist/album":
                return <XJFAlbum id={id}></XJFAlbum>
            case "/artist/mv":
                return <XJFMv id={id}></XJFMv>
            case "/artist/desc":
                return <XJFDesc id={id}></XJFDesc>
            default:
                return <XJFHot id={id}></XJFHot>
                
        }
    }
    return (
        <WrapXJFSinger>
            <XJFTopMenu></XJFTopMenu>
             <div className="w980 container" >
                <WrapSingerLeft>
                    
                    <Topbar id={id}></Topbar>
                    {
                        changepannel()
                    }
                </WrapSingerLeft>
                < WrapSingerRight >
                    右边不变
                </WrapSingerRight>
            </div>
       
        </WrapXJFSinger>
    )
}


export default memo(XJFSinger);
