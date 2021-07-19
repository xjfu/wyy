import React, {
    memo,
    useEffect,
    useRef,useCallback,
    useState,
} from 'react'

import {NavLink} from 'react-router-dom'
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import {
    Carousel
} from 'antd';

// import store from '@/store/index'
import {
    changeRecommandAction,
    getHotAction,
    getTopPlayListAction,
} from './store/createaction'
import HotDjC from './c-pages/hotdj'
import TopList from './c-pages/toplist'
import SingerRight from './c-pages/right'
import {
    RecommendWrap,
    TopBanner,
    HotRecommend,
    HotWrap,
    HotHeader,
    WrapHeaderC,
    
} from './style'
// import {getImgFormat} from '@/utils/tools'
function HotHeaderC(props) {
    // 热门推荐
    
     const {
         topPlayList,
     } = useSelector((state) => ({
        
         topPlayList: state.recommend.topPlayList||[],
     }))

     const dispatch = useDispatch()
     useEffect(() => {
         dispatch(getTopPlayListAction)
     }, [dispatch])
    return (
    <WrapHeaderC>
        <ul className="ulc">
            {topPlayList.slice(0, 8).map((item,index)=>{
                    
                return <li className="lic " key={item.id}>
                    <div className="imgcover">
                        <img src={item.coverImgUrl} alt=""/>
                        <NavLink to={`/playlist?id=`+item.id}  className="imgcover msk">
                            
                        </NavLink>
                        <div className="">

                        </div>
                    </div>
                    <p>
                        <NavLink className="lica" to={`/playlist?id=`+item.id}>{item.name}</NavLink>
                       
                    </p>
                </li>
            })}
        </ul>
       
    </WrapHeaderC>
    )
}



function XJFDiscoverRecommend(props) {
    const {
        banners,
        playlists,
    } = useSelector((state) => ({
        banners: state.recommend.recommend || [],
        playlists: state.recommend.hotRecommend || [],
    }))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeRecommandAction())
        dispatch(getHotAction())
        
        
     }, [dispatch])
    // }, [])
    const [current, setcurrent] = useState(0)
    
    const bannerref = useRef()
    const bannerChange = useCallback((from, to) => {
            
                
            
            setcurrent(to)

        },
        [setcurrent],
    )
 
    return (
        
        <RecommendWrap>
            
            
      
            <div className="cimg" current={current} imageurl={banners[current]||"1"}>
                <div className="topbanner w980" >
                {/* <h1>{banners.length}</h1> */}
                <TopBanner>
                    <div className="bannerleft">
                        <Carousel autoplay  ref={bannerref} beforeChange={bannerChange}>
                            {banners && banners.map((item, index)=>{
                                return <div key={item.imageUrl}>
                                    <a href={item.url}><img src={item.imageUrl} alt="hd"/></a>
                                </div>
                            })}
                            
                        </Carousel>
                    </div>
                    
                    <div className="bannerright download">
                        <div className="downloadimg">
                        <a href="https://music.163.com/store/product" target="_blank" rel="noopener noreferrer">

                            <div className="btn">

                            </div>
                        </a>

                        </div>
                        
                        <p className="p">
                            PC 安卓 iPhone WP iPad Mac 六大客户端
                        </p>
                       
                    </div>
                    
                </TopBanner>
                </div>
            </div>
           
            <div className="content w980">
                <HotRecommend>
                    <div className="hotleft">
                       
                        <HotWrap>
                            <HotHeader>
                                <div className="hlh sprite_02">

                                </div>
                                <div className="hlhr">
                                    <div className="hotnew">
                                        <NavLink to="/discover/playlist/" className="xdsj">热门推荐</NavLink>
                                    </div>
                                    <ul>
                                        {
                                            playlists.slice(0, 5).map((item, index) => {
                                            return <li key={item.name}><NavLink to={`?cat=`+item.name}>{item.name}</NavLink></li>
                                        })}
                                    </ul>
                                   
                                </div>
                                <div className="more">
                                        <NavLink to="/discover/playlist/">
                                            更多
                                        </NavLink>
                                        <i className="sprite_02 cor"></i>
                                </div>
                            </HotHeader>
                            <HotHeaderC>
                            </HotHeaderC>
                        </HotWrap>
                            <HotHeader>
                                <div className="hlh sprite_02">
                                   
                                </div>
                                <div className="hlhr">
                                    <div className="hotnew">
                                        <NavLink to="/discover/album/" className="xdsj">新碟上架</NavLink>
                                    </div>
                                   
                                   
                                </div>
                                 <div className="more">
                                        <NavLink to="/discover/album/">
                                            更多
                                        </NavLink>
                                        <i className="sprite_02 cor"></i>
                                </div>
                            </HotHeader>
                            <HotDjC>
                                
                            </HotDjC>

                            {/* <HotHeaderC></HotHeaderC>*/}
                         <HotWrap>

                            <HotHeader>
                                <div className="hlh sprite_02">
                                   
                                </div>
                                <div className="hlhr">
                                    <div className="hotnew">
                                        <NavLink to="/discover/toplist/" className="xdsj">榜单</NavLink>
                                    </div>
                                   
                                   
                                </div>
                                 <div className="more">
                                        <NavLink to="/discover/toplist/">
                                            更多
                                        </NavLink>
                                        <i className="sprite_02 cor"></i>
                                </div>
                            </HotHeader>
                            
                            <TopList></TopList>
                        </HotWrap>
                    </div>
                    <div className="hotright">
                        <SingerRight>
                            
                        </SingerRight>
                    </div>
                </HotRecommend>
            </div>
            
            {/* <div className="content-content w980">
                新碟上架
            </div>
            <div className="content-footer w980">
                榜单
            </div> */}
            
        </RecommendWrap>
       
    )
}


export default memo(XJFDiscoverRecommend);



