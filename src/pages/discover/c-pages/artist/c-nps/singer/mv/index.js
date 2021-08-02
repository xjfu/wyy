import React, {
    memo,
    useEffect,
} from 'react'
import  {
    useDispatch, useSelector,
    shallowEqual,
} from 'react-redux'
import {WrapMv} from './style'
import {
    getMvArtistSongListAction
} from '../../../store/createaction'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'


const XJFMv = memo(function XJFMv(props) {
    
    const {id} = props
    const dispatch = useDispatch()
     const {
         mvArtistSongList,
     } = useSelector((state) => ({
         mvArtistSongList: state.artist.get("mvArtistSongList")

     }), shallowEqual)

    useEffect(() => {
        dispatch(getMvArtistSongListAction(id))
    }, [dispatch, id])
    return (
        <WrapMv>
            相关mv
            {
                mvArtistSongList.map((item, index) => {
                    return <li key={item.id}>

                        <NavLink to={"/song?id="+item.id}>{item.name}</NavLink>
                        </li>
                })
            }
        </WrapMv>
    )
})


export default XJFMv
