import React, {
    memo,
    // useEffect,
    useState
} from 'react'
import {
    NavLink
} from 'react-router-dom'

import {
    Input
} from 'antd';

import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style'

// import instance from '@/services/request'

import {DragLogin} from '../drag/index'
function Btn(props) {
    return (
        <div rel="noopener noreferrer"><div className="authorpadding" onClick={()=>{props.onClick()}}>
                登录
        </div></div>
    )
}
export default memo(function XJFAppHeader() {
    // useEffect(() => {
        
    //     instance({
    //         method: 'post',
    //         url: '/login/qr/key',
    //         data: {
                
    //             timeout: 8000
    //         }
    //     }).then(res => {
    //         console.log(res)
    //     }).catch(err => {
    //         console.log(err);
    //     })

    // }, [])
    const [slabel, setLable] = useState(true)
    return (
        <HeaderWrapper >
            <div className="content w1100">
                <HeaderLeft>
                    <NavLink to="/discover">
                        <div className="logo sprite_01">
                        </div>
                    </NavLink>
                    
                    <NavLink to="/discover">
                        <div className="left-padding">
                            发现音乐
                        </div>
                        <sub className="cor sprite_01" >&nbsp;</sub>
                    </NavLink>
                    <NavLink to="/mine" exact>
                        <div className="left-padding ">
                            我的音乐
                        </div>
                        <sub className="cor sprite_01" >&nbsp;</sub>
                    </NavLink>
                    <NavLink to="/friend" exact>
                         <div className="left-padding">
                            朋友
                        </div>
                        <sub className="cor sprite_01" >&nbsp;</sub>

                    </NavLink>
                    <a href="https://music.163.com/store/product" target="_blank" rel="noopener noreferrer">
                         <div className="left-padding">
                            商城
                        </div>
                    </a>
                    <a href="https://music.163.com/store/product" target="_blank" rel="noopener noreferrer">
                         <div className="left-padding">
                            音乐人
                        </div>
                    </a>
                     <NavLink to="/download" className="download">
                         <div className="left-padding">
                            下载客户端
                        </div>
                        <sub className="cor sprite_01 " >&nbsp;</sub>
                        <sub className="hot sprite_01" >&nbsp;</sub>
                    </NavLink>
                    
                </HeaderLeft>
                <HeaderRight>
                    {/* <SearchOutlined/> */}
                    
                     <div className="search sprite_01"onClick={e=>setLable(!slabel)} >

                            <Input className="s-show" bordered={false} placeholder={"音乐/视频/电台/用户"}/>
                               {/* {slabel&&<label className="s-label"></label>} */}
                    </div>
                    <div className="author">
                        <a href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter" target="_blank" rel="noopener noreferrer">
                            <div className="authorpadding">
                                创作者中心
                            </div>
                        </a>

                    </div>
                    <div className="login">
                        {/* <a href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter" target="_blank" rel="noopener noreferrer"> */}
                        <DragLogin btn={Btn}></DragLogin>
                        {/* </a> */}
                    </div>
                </HeaderRight>

            </div>
            <div className="divider ">
            </div>
          
                {/* <NavLink to="/">
                    发现音乐
                </NavLink>
                <NavLink to="/mine">我的音乐</NavLink>
                <NavLink to="/friend">我的朋友</NavLink> */}
            
        </HeaderWrapper>
    )
})
