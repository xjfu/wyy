import React, {
    memo,
    useEffect,
    useRef,
} from 'react'
import {
    useSelector,
    shallowEqual,
} from 'react-redux'
import {
    WrapSongList,
} from './style'

import {
    getTimeFormat,
    getImgBlur,
    
} from '@/utils/tools'
import {
    scrollTo
} from '@/utils/playlist'
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
    

     useEffect(() => {
     
  
        
       
        
        // document.querySelector('.active').scrollIntoView({
        //     behavior: "smooth",
        //     block: "center",
        //     inline: "nearest"
        // })

        scrollTo(panelRef.current, (songLyricIndex - 3) * 39, 300)

     }, [songLyricIndex])
    
    return (
        <WrapSongList className="playlist_bg ">
            <div className="list">
                <div className="listhd playlist_bg">
                    <h4>
                        播放列表({
                            songList.length
                        })
                    </h4>
                    <div className="addall" rel="noopener noreferrer" data-action="likeall"><span className="playlist ico ico-add"></span>收藏全部</div>              
                </div>
                <div className="listbd">
                    <img src={getImgBlur(songInf.al.picUrl)} alt="hh" className="imgbg"/>
                    
                    <div className="left">  
                        <ul>
                            {
                                songList.map((item, index) => {
                                return <li key={item.name} data-id={item.id} className="sli">
                                    <div className="lin">
                                        {
                                            item.name
                                        }
                                    </div>
                                    <div className="lirn">
                                        {item.ar[0].name}
                                    </div>
                                    <div className="lit">
                                        {getTimeFormat(item.dt)}
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="right" ref={panelRef}>
                        <div className="content" >
                            {
                                songLyric.map((item, index)=>{
                                    
                                    return <p className={songLyricIndex===index?"active":""} key={item.t} data-time={item.t}>{item.content}</p>
                                })
                            }
                        </div>
                    </div>
                    < div className="msk">

                    </div>
                </div>
            </div>
       </WrapSongList>
    )
}


export default memo(SongList);
