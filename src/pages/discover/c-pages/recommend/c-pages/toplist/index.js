
import React, {
    memo, useEffect 
}
from 'react'

import {
    useSelector, useDispatch, shallowEqual
} from 'react-redux'
import {
    WrapTopList,
} from './style'

import {
    getTopListQuick,
    getTopListNew,
    getTopListOrigin,

} from '../../store/createaction'

import XJFTopcps from './c-cps/index'


function TopList(props) {
    // 热门榜单
    const {
        topListQuick,
        topListNew,
        topListOrigin,
    } = useSelector((state) => ({
        topListQuick: state.recommend.topListQuick || [],
        topListNew: state.recommend.topListNew || [],
        topListOrigin: state.recommend.topListOrigin || [],
    }), shallowEqual)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getTopListQuick("19723756"))
        dispatch(getTopListNew("3779629"))
        dispatch(getTopListOrigin("2884035"))
    }, [dispatch])
    
    return (

    <WrapTopList>
        <div className="listcontent v-hd2 recommendtop">
            <XJFTopcps typeList={topListQuick} title="飙升榜" id="19723756"titleImg="http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100"></XJFTopcps>
            <XJFTopcps typeList={topListNew} title="新歌榜" id="3779629"titleImg="http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100"></XJFTopcps>
            <XJFTopcps typeList={topListOrigin} title="原创榜" id="2884035"titleImg="http://p4.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100"></XJFTopcps>
        </div>
    </WrapTopList>
    )
}

export default memo(TopList);

