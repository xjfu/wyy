import React, {
    memo,
    useEffect,
    useRef,
    useState,
    useCallback,
} from 'react'
import {
    useSelector,
    shallowEqual,
    useDispatch,
} from 'react-redux'
import {
    WrapXJFPlayMusic,
    WrapContainer,
} from './style'
import { Slider} from 'antd'
import {NavLink} from 'react-router-dom'

import SongList from '../bar/c-nps/list'
import {
    changePlaySequence,
    changeCurrentIndexAndSongAction,
} from '../../store/createaction'

import {
    getImgFormat,
    getTimeFormat,
    getSongSrc,
} from '@/utils/tools'

function XJFPlayMusic(props) {
    const audioref = useRef()
    const [isPlaying, setIsPlaying] = useState(false)
    const [prograss, setPrograss] = useState(0)
    const [isChange, setisChange] = useState(false)
    const [listshow, setlistshow] = useState(false)
    const {
        songInf,
        songList,
        firstLoad,
        playSequence,
    } = useSelector((state)=>({
        songInf: state.play.get("songInf"),
        songList:state.play.get("songList"),
        firstLoad: state.play.get("firstLoad"),
        playSequence: state.play.get("playSequence"),
    }), shallowEqual)


    const dispatch = useDispatch()
    useEffect(() => {
        audioref.current.src = getSongSrc(songInf[0].id)
        audioref.current.volume = 0.3;
        if (!firstLoad) setIsPlaying(true + Math.random());
  
    }, [firstLoad, songInf])
    useEffect(() => {
        isPlaying && audioref.current.play()
        
    }, [isPlaying])
    const changeSequence = ()=>{
        let currentSequence = playSequence;
        currentSequence++;
        if (currentSequence > 2) {
            currentSequence = 0
        }
        dispatch(changePlaySequence(currentSequence))
    }
    const playMusic = useCallback(
        () => { 
            setIsPlaying(!isPlaying);
            isPlaying ? audioref.current.pause() : audioref.current.play();
        },
        [isPlaying],
    )
    function updateTime(e){
       
            
        if(!isChange) {
            // 设置进度
            setPrograss(audioref.current.currentTime / audioref.current.duration * 100)
            
        }
        setisChange(false)

    }
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
            setIsPlaying(true)
            audioref.current.play();
        },
        [audioref],
    )
    const changeSong = (tag)=>{
        dispatch(changeCurrentIndexAndSongAction(tag));
        setIsPlaying(true + Math.random())
    }
        
       
      
    return (
        <WrapXJFPlayMusic playSequence={playSequence}>
            <div className="maincontainer sprite_player">
                {
                    songInf.map((item, dt) => {
                        return <div className="w980 container " key={item.id}>
                
                            <div className="btnplay">
                                <div className="playprev sprite_player " onClick={()=>{changeSong(-1)}}>

                                </div>
                                <div className = {
                                    isPlaying ? "playopen sprite_player" : "playpause sprite_player"
                                }
                                onClick = {
                                    e=>playMusic(e)
                                    
                                }>

                                </div>
                                <div className="playnext sprite_player" onClick={(e) => changeSong(1)}>
                                    
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
                        
                            <div className="btnlist">
                                <div className={"sprite_player orderloop"} onClick={()=>{
                                    changeSequence()
                                }}>

                                </div>
                                <div className="list sprite_player" onClick={()=>{
                                    setlistshow(!listshow)
                                }}>{songList && songList.length}</div>
                                
                                
                            </div>

                                <audio ref = {
                                    audioref
                                } onEnded={()=>{}}
                                
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

            {
           listshow && < WrapContainer >

            < SongList >
                
            </SongList>
        </WrapContainer>}
       </WrapXJFPlayMusic>
    )
}


export default memo(XJFPlayMusic);
