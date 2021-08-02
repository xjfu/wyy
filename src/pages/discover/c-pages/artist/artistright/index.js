import React, {
    memo,
    useEffect,
} from 'react'
import {
    NavLink
} from 'react-router-dom'
import {
    
    shallowEqual,
    useDispatch,
    useSelector,
} from 'react-redux'
import {
    getHotArtistListAction
} from '../store/createaction'

import {
    WrapArtistRight
} from './style'
import TitleBtmRed from "@/components/headbar/titlebred"
function ArtistRight(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHotArtistListAction(50, 0))
    }, [dispatch])
    const {
        hotArtistList
    } = useSelector((state) => ({
        hotArtistList: state.artist.get("hotArtistList"),
    }), shallowEqual)

    return (
        <WrapArtistRight>
            <div className="container">
                <TitleBtmRed title="入驻歌手" link={"/signed/"}></TitleBtmRed>
                <TitleBtmRed title="热门歌手" link={null}></TitleBtmRed>
                {
                    hotArtistList.map((item, index) => {
                        return <li key={item.id}>
                            <NavLink to={"/artist?id="+item.id}>{item.name}</NavLink>
                            
                            </li>
                    })
                }
            </div>
        </WrapArtistRight>
        
    )
}


export default memo(ArtistRight);



