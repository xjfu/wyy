import React, {
    memo,
    useEffect,
    useRef,
} from 'react'
import {
    useSelector,
    shallowEqual,
    useDispatch,
    
} from 'react-redux'
import {
    WrapSongList,
} from './style'
import ListItem from './item/index';
import {
    getTimeFormat,
    getImgBlur,
    
} from '@/utils/tools'
import {
    scrollTo
} from '@/utils/playlist'
import {
    songDetail
} from '../../../../store/createaction';

function SongList(props) {
     const {
         songList,
         songLyric,
         songInf,
         songLyricIndex,
     } = useSelector((state) => ({
         songList: state.play.get("songList"),
         songLyric: state.play.get("songLyric"),
         songInf: state.play.get("songInf"),
         songLyricIndex: state.play.get("songLyricIndex"),

     }), shallowEqual)
    const panelRef = useRef()
    // const length = songList.length
    const dispatch = useDispatch()
    useEffect(() => {
        scrollTo(panelRef.current, (songLyricIndex - 3) * 39, 300)
        
        }, [songLyricIndex, songList])
    const playMusic = (item)=>{
        
        dispatch(songDetail(item))
    }
    return (
        <WrapSongList className="">
            <div className="list">
                <div className="listhd playlist_bg">
                    <h4>
                        播放列表({
                            songList.length
                        })
                    </h4>
                    <div className="addall" rel="noopener noreferrer" data-action="likeall"><span className="playlist ico ico-add"></span>收藏全部</div>              
                </div>
                <div className="listbd playlist_bg">
                    <img src={getImgBlur(songInf.al.picUrl)} alt="hh" className="imgbg"/>
                    
                    <div className="left">  
                        <ul>
                            {
                                songList.map((item, index) => {
                                return <li onClick={(e)=>{playMusic(item)}} key={item.id} className={songInf.id === item.id? "active": ""}>
                                    <ListItem key={item.id} songId={item.id} name={item.name} artist={item.ar[0].name} time={getTimeFormat(item.dt)} artistId={item.ar[0].id} />
                                    </li>
                            })}
                        </ul>
                        {songList.length === 0 && <span>去首页发现音乐，或在我的音乐收听自己收藏的歌单。</span>} 
                    </div>
                    <div className="bline j-flag"></div>
                    <div className="right" ref={panelRef}>
                        <div className="content" >
                            {
                                songLyric.map((item, index)=>{
                                    
                                    return <p className={songLyricIndex===index?"active":""} key={item.t} data-time={item.t}>{item.content}</p>
                                })
                            }
                        </div>
                    </div>
                    <div className="msk">

                    </div>
                     
                </div>
           
            </div>

       </WrapSongList>
    )
}


export default memo(SongList);
