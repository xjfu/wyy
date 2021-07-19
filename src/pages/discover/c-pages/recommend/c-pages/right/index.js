
import {
    useEffect,
} from 'react'

import {
    useSelector,
    useDispatch,
} from 'react-redux'
import {getImgFormat} from '@/utils/tools'
import { NavLink } from 'react-router-dom'
import { getArtistListSinger } from '../../store/createaction'
import {
    WrapRight,
    WrapSingerRight,
    
} from './style'
import {DragLogin} from '@/components/drag'

function Btn(props) {
    return (

        <>
            <button className="btn sprite_02" onClick={()=>{props.onClick()}}>登录</button> 
        </>
    )
}

export default function SingerRight(props) {

    // 入住歌手
    const {
        artistListSinger,
    } = useSelector((state)=>({
        artistListSinger: state.recommend.artistListSinger || [],
    }))
    
    const dispatch = useDispatch()
    // const [visible, setvisible] = useState(false)
    useEffect(() => {
        dispatch(getArtistListSinger())
        // setvisible(false)
    }, [dispatch])
 
    return (
        <WrapRight>
            <WrapSingerRight>
                <div className="singerh sprite_02">
                    <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                    {/* <button className="btn sprite_02" onClick={()=>{
                        setvisible(true);
                    }}> 
                    登录
                    </button> */}
                    <DragLogin btn={Btn}>
                    </DragLogin>
                </div>
                <div className="sigerc">
                    <div className="spna">
                        <span >入驻歌手</span>
                        <NavLink to="/discover/artist/signed/">查看全部{">"}</NavLink>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="singerl">
                    
                    {artistListSinger.map((item)=>{
                        return <li key={item.id}>
                            <NavLink to={"/artist?id="+item.id} className="artinfo">
                                <div className="head">
                                    <img src={getImgFormat(item.picUrl, 64, 64)} alt=""/>
                                </div>
                                <div className="ifo">
                                    <h4>
                                        {item.name}
                                    </h4>
                                    <p className="f-thide s-fc3">台湾歌手张惠妹</p>
                                </div>
                            </NavLink>
                        </li>
                        
                    })}
                    <div className="reply ">
                        <a href="https://music.163.com/st/musician" className="sprite_button" target="_blank" rel="noopener noreferrer">
                            <i className="sprite_button">申请成为网易音乐人</i>
                        </a>
                    </div>
                </div>

                <div className="sigerc">
                <div className="spna">
                    <span >热门主播</span>
                </div>
                <div>

                </div>
            </div>
            </WrapSingerRight >

            
        </WrapRight>
      
    )
}
