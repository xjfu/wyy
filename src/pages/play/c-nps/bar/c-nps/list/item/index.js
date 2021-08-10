import React, {
    memo, useState
} from 'react'
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    WrapListItem,
} from './style'
import {
    FolderAddOutlined,DeleteOutlined,
} from '@ant-design/icons';
import {
    deleteCurrentSongAction
} from '../../../../../store/createaction';
function ListItem(props) {
    const [active, setactive] = useState(true)
    // redux
    const dispatch = useDispatch()
    
      const {
          songList
      } = useSelector(state => ({
          songList: state.play.get('songList')
      }))

    const {
        songId,
        name,
        time,
        artist,
        artistId
    } = props
    const deleteCurrentSong = (e) => {
        e.stopPropagation()
        setactive(false)
        const currentSongIndex = songList.findIndex(song => song.id === songId)
        songList.splice(currentSongIndex, 1)
        
        dispatch(deleteCurrentSongAction(songList))
    }
    return (
        active && < WrapListItem>
                
                <div className={"col col-1"}><div className="playicn playlist"></div></div>
                
                <div className="lin">{name}</div>
                <div className="liicon">
                    <FolderAddOutlined />
                    <DeleteOutlined onClick={(e) => deleteCurrentSong(e)}/>
                </div>  
                <div className="lirn">
                    <Link to = {
                        "/artist?id=" + artistId
                    }>
                        {
                            artist
                        }
                    </Link>
                    
                </div>
                <div className="lit">
                    {
                        time
                    }
                </div>

       </WrapListItem>
    )
}


export default memo(ListItem);
