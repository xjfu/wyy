
// 歌词详情页面评论模块


import React, {
    memo,
    
} from 'react'
import {Link} from "react-router-dom"
import {
    WrapXJFComments,
} from './style'
import {
    getImgFormat,
    formMatDate
} from '@/utils/tools'

// redux
function XJFComments(props) {
    
    const comments = props.comments || []

    return (
        <WrapXJFComments>
            
                   { comments.map((item, index) => {
                        return <div key={item.time} className="itm">
                            <div className="head">
                                <Link to={"/user/home?id="+item.user.userId}>
                                    
                                    <img src={getImgFormat(item.user.avatarUrl, 50, 50)} alt=""/>
                                </Link>
                            </div>
                            <div className="cntwrap">
                                <div>
                                    <div className="cnt f-brk">
                                        <Link to={"/user/home?id="+item.user.userId}>{item.user.nickname}</Link>
                                        {"："+item.content}
                                    </div>
                                    
                                </div>
                                <div className="rp">
                                    <div className="time s-fc4">{formMatDate(item.time)}</div>
                                </div>
                            </div>
                            
                        </div>
                    })}
            
        </WrapXJFComments>
    )
}


export default memo(XJFComments);
