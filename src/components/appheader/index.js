import React, {
    memo,
    useEffect,
    useState
} from 'react'
import {
    useDispatch,
    useSelector,
    shallowEqual
} from 'react-redux';
import {
    NavLink,
    useHistory

} from 'react-router-dom'
import {
    Input
} from 'antd';

import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style'
// redux
import XJFSearch from '@/components/search'
// import instance from '@/services/request'

import XJFLogin from '../login/index'
import {getSearchSugestAction} from '@/components/search/store/createaction';
export default memo(function XJFAppHeader(props) {
    const [show, setshow] = useState(false)
    const [searchShow, setsearchShow] = useState(false)
    const [inputv, setinputv] = useState()

    // redux
    const {
        qrCheckKey,
    } = useSelector((state) => ({
        qrCheckKey: state.login.get("qrCheckKey"),
    }), shallowEqual)
    const cookie = qrCheckKey && qrCheckKey.cookies
    // console.log(cookie)
    const history = useHistory();
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        document.addEventListener('click', function(){
            setsearchShow(false)
            console.log("show")
        })
    }, [])
    const haddleClose = () => {
        setshow(!show)
    } 
    const inputFocus=(e)=>{
        
        setsearchShow(true)
    }
    const inputBlur = (e) => {
        
        
    }

    const inputEnter = (e) => {
        history.push('/search/m/?s='+e.target.value+"&type=1")
        setsearchShow(false)
    }

    const inputChange=(e)=>{
        setinputv(e.target.value)
        if(e.target.value && e.target.value !== "") {
            setsearchShow(true)
            dispatch(getSearchSugestAction(e.target.value))
        } else {
            setsearchShow(false)
        }
    }
 
   
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
                            ????????????
                        </div>
                        <sub className="cor sprite_01" >&nbsp;</sub>
                    </NavLink>
                    <NavLink to="/mine" exact>
                        <div className="left-padding ">
                            ????????????
                        </div>
                        <sub className="cor sprite_01" >&nbsp;</sub>
                    </NavLink>
                    <NavLink to="/friend" exact>
                         <div className="left-padding">
                            ??????
                        </div>
                        <sub className="cor sprite_01" >&nbsp;</sub>

                    </NavLink>
                    <a href="https://music.163.com/store/product" target="_blank" rel="noopener noreferrer">
                         <div className="left-padding">
                            ??????
                        </div>
                    </a>
                    <a href="https://music.163.com/store/product" target="_blank" rel="noopener noreferrer">
                         <div className="left-padding">
                            ?????????
                        </div>
                    </a>
                     <NavLink to="/download" className="download">
                         <div className="left-padding">
                            ???????????????
                        </div>
                        <sub className="cor sprite_01 " >&nbsp;</sub>
                        <sub className="hot sprite_01" >&nbsp;</sub>
                    </NavLink>
                    
                </HeaderLeft>
                <HeaderRight>
                    {/* <SearchOutlined/> */}
                    
                     <div className="search sprite_01">

                            <Input className="s-show" bordered={false} placeholder={"??????/??????/??????/??????"}onChange={(e)=>{
                                
                                inputChange(e)
                            }

                            }
                            onBlur = {
                                ()=>{
                                inputBlur()
                            }
                            }
                            onFocus={()=>{
                                inputFocus()
                            }}
                            onClick={(e)=>{
                                e.nativeEvent.stopImmediatePropagation()
                            }}
                            onPressEnter = {
                                    (e) => {
                                inputEnter(e)
                            }}/>
                               {/* {slabel&&<label className="s-label"></label>} */}
                               { searchShow && < XJFSearch value = {
                                   inputv 
                               }
                               width = {
                                   240
                               }
                               show = {
                                    searchShow
                               }
                               
                               />}
                    </div>
                    <div className="author">
                        <a href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter" target="_blank" rel="noopener noreferrer">
                            <div className="authorpadding">
                                ???????????????
                            </div>
                        </a>

                    </div>
                    <div className="login">
                        {/* <a href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter" target="_blank" rel="noopener noreferrer"> */}
                        {!cookie && <div rel="noopener noreferrer">
                            <div className="authorpadding" onClick={()=>{
                            haddleClose()
                        }}>
                            ??????
                        </div>
                        </div>}
                        {!cookie && show  && <XJFLogin widowclose={()=>haddleClose}></XJFLogin>}
                        {/* </a> */}
                        {cookie && <div>
                            
                            </div>}
                    </div>
                </HeaderRight>

            </div>
            <div className="divider ">
            </div>
          
                {/* <NavLink to="/">
                    ????????????
                </NavLink>
                <NavLink to="/mine">????????????</NavLink>
                <NavLink to="/friend">????????????</NavLink> */}

            
        </HeaderWrapper>
    )
})
