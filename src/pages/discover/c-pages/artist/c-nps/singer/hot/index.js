import React, {
    memo,
    useEffect,
} from 'react'
import  {
    useDispatch, useSelector,
    shallowEqual,
} from 'react-redux'
import {WrapHot} from './style'
import {
    getHotArtistSongListAction
} from '../../../store/createaction'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'


const XJFHot = memo(function XJFHot(props) {
    
    const {id} = props
    const dispatch = useDispatch()
     const {
         hotArtistSongList,
     } = useSelector((state) => ({
         hotArtistSongList: state.artist.get("hotArtistSongList")

     }), shallowEqual)

    useEffect(() => {
        dispatch(getHotArtistSongListAction(id))
    }, [dispatch, id])
    return (
        <WrapHot>
            热门歌曲
            {
                hotArtistSongList.map((item, index)=>{
                    return <li key={item.id}>

                        <NavLink to={"/song?id="+item.id}>{item.name}</NavLink>
                        </li>
                })
            }
        </WrapHot>
    )
})


export default XJFHot
