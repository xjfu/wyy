import React, {
    memo,
    useEffect,
} from 'react'
import  {
    useDispatch, useSelector,
    shallowEqual,
} from 'react-redux'
import {WrapAlbum} from './style'
import {
    getAlbumArtistSongListAction
} from '../../../store/createaction'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'


const XJFAlbum = memo(function XJFAlbum(props) {
    const {id} = props
    const dispatch = useDispatch()
     const {
         albumArtistSongList,
     } = useSelector((state) => ({
         albumArtistSongList: state.artist.get("albumArtistSongList") || []

     }), shallowEqual)

    useEffect(() => {
        dispatch(getAlbumArtistSongListAction(id))
    }, [dispatch, id])

    return (
        <WrapAlbum>
            歌手专辑
            {
                albumArtistSongList.map((item, index) => {
                    return <li key={item.id}>

                            <NavLink to={"/album?id="+item.id}>{item.name}</NavLink>
                        </li>
                })
            }
        </WrapAlbum>
    )
})


export default XJFAlbum
