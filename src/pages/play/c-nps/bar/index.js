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
    getSongLyric,
    changeSongLyricIndex,
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
        songLyric,
        songLyricIndex,
    } = useSelector((state)=>({
        songInf: state.play.get("songInf"),
        songList:state.play.get("songList"),
        firstLoad: state.play.get("firstLoad"),
        playSequence: state.play.get("playSequence"),
        songLyric: state.play.get("songLyric"),
        songLyricIndex: state.play.get("songLyricIndex"),
        
    }), shallowEqual)


    const dispatch = useDispatch()
    useEffect(() => {
        audioref.current.src = getSongSrc(songInf.id)
        dispatch(getSongLyric(songInf.id))
        audioref.current.volume = 0.3;
        if (!firstLoad) setIsPlaying(true + Math.random());
  
    }, [firstLoad, dispatch, songInf])
    useEffect(() => {
        isPlaying && audioref.current.play();
        
        
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
        // 设置当前歌词,设置index

        let i = 0;
        // console.log(songLyric[Math.floor(audioref.current.currentTime)])
        for (; i < songLyric.length; i++) {
            const item = songLyric[i];
            if (item.t > e.target.currentTime * 1000) {
                break
            }
        }
        if (songLyricIndex !== i-1) {
            dispatch(changeSongLyricIndex(i - 1))
        }
        
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

    const timeEndChangeSong = ()=>{
        if (playSequence === 2) {
            audioref.current.currentTime = 0
            audioref.current.play()
        } else {
            changeSong(1)
        }
    }
       
      
    return (
        <WrapXJFPlayMusic playSequence={playSequence}>
            <div className="maincontainer sprite_player">
                {
                   
                        <div className="w980 container " key={songInf.id}>
                
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
                            
                            

                            <div className="btnimg"><img src={getImgFormat(songInf.al.picUrl, 34, 34)} alt="img"/></div>
                            <div className="btnrange">
                                <div className="header">
                                    <NavLink to={"/song?id="+songInf.id} className="h_a">
                                        {songInf.name}
                                    </NavLink>
                                   

                                    < NavLink className="h_b" to = {"/artist?id="+songInf.ar[0].id}>
                                    {songInf.ar[0].name}
                                    </NavLink>
                                  
                                    <span >
                                    
                                    
                                    </span>
                                    <NavLink  to={"/song?id="+songInf.id}>
                                        
                                    </NavLink>
                                </div>
                                <div className="btm">
                                    <Slider tipFormatter={null} defaultValue={0} disabled={false} onChange={prograssOnchange} onAfterChange={prograssAfterchange} value={prograss} />
                                        
                                    <span className="time">
                                        <em>{getTimeFormat(prograss / 100 * songInf.dt)}</em>
                                        {" / "+getTimeFormat(songInf.dt)}
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
                                } onEnded={timeEndChangeSong}
                                
                                onTimeUpdate = {
                                    (e) => {
                                        updateTime(e)
                                    }
                                }>

                                </audio>
                        </div>
                   
                }

            </div>

            {
           listshow && < WrapContainer >
            <SongList>
                
            </SongList>
        </WrapContainer>}
       </WrapXJFPlayMusic>
    )
}


export default memo(XJFPlayMusic);
