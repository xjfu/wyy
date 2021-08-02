
import {
    useEffect,
    useRef,
} from 'react'
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import {
    NavLink
} from 'react-router-dom'

import {
    Carousel,
} from 'antd';

import {
    WrapHotDjC
} from './style'
import {getImgFormat} from '@/utils/tools'
import {getAlbumNewestAction} from '../../store/createaction'

export default function HotDjC(props) {
    // 热门新碟

    const {
        albumNewest,
    } = useSelector((state) => ({
        albumNewest: state.recommend.get("albumNewest")
    }))
    const buttonref = useRef()
  
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAlbumNewestAction())
        
    }, [dispatch])
    return (
    <WrapHotDjC>
        <div className="hdjc">
           
             <div className="hdjcc">
                  
                    <Carousel dots={false} ref={buttonref}>
                        <div className="djcar">
                            {
                                
                                albumNewest && albumNewest.slice(0, 5).map((item, index) => {
                                return <li key={item.id} className="djli ">
                                        <div className="djlidiv">
                                        <div>
                                            <NavLink  to={`/album?id=`+item.id}>
                                                <img src={getImgFormat(item.picUrl, 60, 60)} alt=""/>
                                            </NavLink>
                                            
                                            <p className="p">
                                                <NavLink to={`/album?id=`+item.id} className="pa">
                                                    {item.name}
                                                </NavLink>
                                            </p>
                                            <p>
                                                <NavLink  to={`/artist?id=`+item.artist.id} className="a">
                                                    {item.artist.name}
                                                </NavLink>
                                            </p>
                                            </div>
                                            
                                            </div>
                                            
                                            <div className="absoluteli imgcover">

                                            </div>
                                        
                                        </li>

                            })}
                        </div>
                        <div className="djcar">
                            {
                                
                                albumNewest && albumNewest.slice(5, 10).map((item, index) => {
                                return <li key={item.id} className="djli ">
                                        <div className="djlidiv">
                                        <div>
                                            <NavLink  to="/">
                                                < img src = {
                                                    getImgFormat(item.picUrl, 60, 60) 
                                                }
                                                alt = "" />
                                            </NavLink>
                                            
                                            <p className="p">
                                                <NavLink to="/" className="pa">
                                                    {item.name}
                                                </NavLink>
                                            </p>
                                            <p>
                                                <NavLink to="/" className="a">
                                                    {item.artist.name}
                                                </NavLink>
                                            </p>
                                            </div>
                                            
                                            </div>
                                            
                                            <div className="absoluteli imgcover">

                                            </div>
                                        
                                        </li>

                            })}
                        </div>
                    </Carousel>
                            
                   
                   
            </div>
            <div className="hotbtn">
                        <button className="sprite_02 prev" onClick={()=>{
                            buttonref.current.prev()
                        }}>
                        </button>

                        <button  className="sprite_02 next" onClick={()=>{
                            buttonref.current.next()
                        }}>
                        </button>
                    </div>
        </div>
       
       
    </WrapHotDjC>
    )
}
