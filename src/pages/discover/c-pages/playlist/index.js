import React, {
    memo,
    useEffect,
} from 'react'
import {
    useSelector,
    shallowEqual,
    useDispatch,
} from 'react-redux'
import {
    NavLink
} from 'react-router-dom';
import {WrapXJFDiscoverPlaylist} from './style'
import {getPlayListAction} from './store/createaction';
function XJFDiscoverPlaylist(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlayListAction())
        
    }, [dispatch])
    const {
        playList
    } = useSelector((state)=>({
        playList:state.playList.get("playList")
    }),shallowEqual)
    return (
        <WrapXJFDiscoverPlaylist>
            <div className="w980">
                {playList.map((item, index)=>{
                    return <li key={item.id}>
                        <NavLink to={"/playlist?id="+item.id}>
                            {item.name}
                        </NavLink>
                        
                    </li>
                })}
            </div>
        </WrapXJFDiscoverPlaylist>
        
    )
}


export default memo(XJFDiscoverPlaylist);



