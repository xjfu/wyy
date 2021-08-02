import React, {
    memo,
    useEffect,
} from 'react'
import {
    useSelector,
    useDispatch,
    shallowEqual
} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {WrapXJFDiscoverTopList} from './style';
import {
    getTopListQuick,
} from '../recommend/store/createaction'

function XJFDiscoverTopList(props) {
    const dispatch = useDispatch()
    const {
        topListQuick,
    } = useSelector((state) => ({
        topListQuick: state.recommend.get("topListQuick")
    }), shallowEqual)
    useEffect(() => {
        dispatch(getTopListQuick("19723756"))
    }, [dispatch])

    return (
        <WrapXJFDiscoverTopList>
            <div className="w980">
                {topListQuick.map((item, index)=>{
                    return <li key={item.name}><NavLink to={"/song?id="+item.id}>
                        
                        {item.name}
                    </NavLink></li>
                })}
            </div>
            
        </WrapXJFDiscoverTopList>
    )
}


export default memo(XJFDiscoverTopList);



