import React, {
    memo,
    useEffect,
} from 'react'
import  {
    useDispatch, useSelector,
    shallowEqual,
} from 'react-redux'
import {WrapDesc} from './style'
import {
    getDescArtistSongListAction
} from '../../../store/createaction'
// import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'


const XJFDesc = memo(function XJFdesc(props) {
    
    const {id} = props
    const dispatch = useDispatch()
     const {
         descArtistSongList,
     } = useSelector((state) => ({
         descArtistSongList: state.artist.get("descArtistSongList")

     }), shallowEqual)

    useEffect(() => {
        dispatch(getDescArtistSongListAction(id))
    }, [dispatch, id])
    return (
        <WrapDesc>
            
            
            {
                descArtistSongList.briefDesc
            }
        </WrapDesc>
    )
})


export default XJFDesc
