import React, {
    memo,
    useEffect,

} from 'react'
import {NavLink} from 'react-router-dom'
import {
    useDispatch,
    shallowEqual,
    useSelector
} from 'react-redux';
import {WrapXJFDiscoverRecommend} from './style'
import {
    getAlbumNewestAction,
    getAlbumAllAction,
} from './store/createaction';

import XJFDbpages from '@/pages/play/dbpages';
import TitleBtmRed from '@/components/headbar/titlebred';
function XJFDiscoverRecommend(props) {
    const {
        albumNewest,
        albumAll,
        albumAllCount,
        dpIndex,
    } = useSelector((state) => ({
        // albumNewest: state.getIn(["recommend", "albumNewest"])
        albumNewest: state.album.get("albumNewest"),
        albumAll: state.album.get("albumAll"),
        albumAllCount: state.album.get("albumAllCount"),
        dpIndex: state.play.get("dpIndex")
    }), shallowEqual)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAlbumNewestAction())
        dispatch(getAlbumAllAction(35, (dpIndex-1)*35, "ALL"))
    }, [dispatch, dpIndex])
    return (
        <WrapXJFDiscoverRecommend>
            <div className="w980">
                {albumNewest.map((item, index)=>{
                return <li key={item.id}>
                    <NavLink to={"/album?id="+item.id}>
                        {item.name}
                    </NavLink>
                </li>
            })}
            <TitleBtmRed title="全部新碟" link={null}></TitleBtmRed>
            {albumAll.map((item, index)=>{
                return <li key={item.id}>
                    <NavLink to={"/album?id="+item.id}>
                        {item.name}
                    </NavLink>
                </li>
            })}
            <XJFDbpages count={albumAllCount} onePage={35}></XJFDbpages>
            </div>
            
        </WrapXJFDiscoverRecommend>
        
    )
}


export default memo(XJFDiscoverRecommend);



