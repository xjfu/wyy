
// 歌词详情页面

import React, {
    memo,
    useState
} from 'react'
import {
    WrapXJFLyRic,
} from './style'

import {getImgFormat} from '@/utils/tools'
function XJFLyRic(props) {
    const [open, setopen] = useState(false)
    // 获取歌词
    const {
        songIdLyricInf,
        songIdInf,
    } = props
    
    // redux
    
    const imgUrl = songIdInf.al && songIdInf.al.picUrl

    return (
        <WrapXJFLyRic>
            <div className="lrcc">
                <div className="left">
                    <img src={getImgFormat(imgUrl, 130, 130)} alt=""/>
                    <span className="imgcover f-alpha"></span>
                </div>
                <div className="right">
                    {
                        songIdLyricInf.slice(0, 13).map((item, index) => {
                            return <li key={index}>
                            
                            {item.content} <br/>
                        </li>
                    
                    })}
                    {!open && songIdLyricInf.length>13&&<div className="crl"><span id="flag_ctrl"  className="s-fc7" onClick={()=>setopen(true)}>展开<i className="u-icn u-icn-69 icon"></i></span></div>}
                    <div className={open?"":"close"}>
                        {
                            songIdLyricInf.slice(13).map((item, index) => {
                                return <li key={index}>
                                
                                {item.content}<br/>
                                </li>
                            })
                        }  
                    {open&&<div className="crl"><span id="flag_ctrl"  className="s-fc7" onClick={()=>setopen(false)}>收起<i className="u-icn u-icn-96 icon"></i></span></div>}

                    </div>

                     
                </div>
            
            </div>

            
        </WrapXJFLyRic>
    )
}


export default memo(XJFLyRic);
