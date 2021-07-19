import React, {
    memo,
    useEffect,
    useRef,
    useState,
    useCallback,
} from 'react'
import {
    useSelector,
    shallowEqual
} from 'react-redux'
import {
    WrapXJFPlayMusic,

} from './style'
import { Slider} from 'antd'
import {NavLink} from 'react-router-dom'

import {
    getImgFormat,
    getTimeFormat,
    getSongSrc,
} from '@/utils/tools'

function XJFPlayMusic(props) {
    const audioref = useRef()
    const [open, setopen] = useState(false)
    const [prograss, setPrograss] = useState(0)
    const [isChange, setisChange] = useState(false)

    const {
        songInf,
    } = useSelector((state)=>({
        songInf: state.play.get("songInf")
        
    }), shallowEqual)
  
    useEffect(() => {
        audioref.current.src = getSongSrc(songInf[0].id)
        setopen(true + Math.random())
        console.log(audioref.current.currentTime)
        audioref.current.play()
        setisChange(false)
    }, [songInf])
    
    
    const playMusic = useCallback(
        () => { 
            
            if (!open) {
                audioref.current.play()
                setopen(true)
            } else {
                audioref.current.pause()
                setopen(false)
            }
        },
        [open],
    )
    const updateTime = useCallback(
        (e) => {

            if(!isChange) {
                // 设置进度
                setPrograss(audioref.current.currentTime / audioref.current.duration * 100)
                
            }
            setisChange(false)
            
        },
        [isChange, setPrograss],
    )
    const prograssOnchange = useCallback(
        (value) => {
     
            setisChange(true)
            
            setPrograss(value)
            
        },
        
        [],
    )
    const prograssAfterchange = useCallback(
        (value) => {
            audioref.current.currentTime = value / 100 * audioref.current.duration
            setopen(true)
            audioref.current.play();
        },
        [audioref],
    )

      
    return (
        <WrapXJFPlayMusic>
            <div className="maincontainer sprite_player">
                {
                    songInf.map((item, dt) => {
                        return <div className="w980 container " key={item.id}>
                
                            <div className="btnplay">
                                <div className="playprev sprite_player">

                                </div>
                                <div className = {
                                    open ? "playopen sprite_player" : "playpause sprite_player"
                                }
                                onClick = {
                                    e=>playMusic(e)
                                }>

                                </div>
                                <div className="playnext sprite_player">
                                    
                                </div>
                            </div>
                            
                            

                            <div className="btnimg"><img src={getImgFormat(item.al.picUrl, 34, 34)} alt="img"/></div>
                            <div className="btnrange">
                                <div className="header">
                                    <NavLink to={"/song?id="+item.id} className="h_a">
                                        {item.name}
                                    </NavLink>
                                   

                                    < NavLink className="h_b" to = {"/artist?id="+item.ar[0].id}>
                                    {item.ar[0].name}
                                    </NavLink>
                                  
                                    <span >
                                        {/* <span key={item.id}>{item.dt}</span> */}
                                    
                                    </span>
                                    <NavLink  to={"/song?id="+item.id}>
                                        
                                    </NavLink>
                                </div>
                                <div className="btm">
                                    <Slider tipFormatter={null} defaultValue={0} disabled={false} onChange={prograssOnchange} onAfterChange={prograssAfterchange} value={prograss} />
                                        
                                    <span className="time">
                                        <em>{getTimeFormat(prograss / 100 * item.dt)}</em>
                                        {" / "+getTimeFormat(item.dt)}
                                    </span>
                                </div>
                                
                            </div>
                        
                            <div className="btnplay"></div>

                                <audio ref = {
                                    audioref
                                } onEnded={()=>{setopen(false)}}
                                
                                onTimeUpdate = {
                                    (e) => {
                                        updateTime(e)
                                    }
                                }>

                                </audio>
                        </div>
                    })
                    
                }
               
            </div>
        </WrapXJFPlayMusic>
    )
}


export default memo(XJFPlayMusic);
