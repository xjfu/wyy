import React, {
    memo,
 
} from 'react'
import {
    useSelector,
    shallowEqual
} from 'react-redux'
import {
    WrapSongList,
} from './style'

import {

} from '@/utils/tools'

function SongList(props) {
     const {
         songList,
     } = useSelector((state) => ({
         songList: state.play.get("songList")
     }), shallowEqual)
   
    
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
                    <div>
                        <ul>
                            {
                                songList.map((item, index) => {
                                return <li key={item.name}>
                                    {
                                        item.name
                                    }
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
       </WrapSongList>
    )
}


export default memo(SongList);
