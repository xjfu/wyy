import React, {
    memo,
    useState,
    useCallback,
} from 'react'
import {NavLink} from 'react-router-dom'
import {
    useDispatch,
} from 'react-redux'
import {
    getSongDetail
} from '@/pages/play/store/createaction'



function XJFTopcps(props) {
    const {
        typeList,
        title,
        titleImg,
        id,
    } = props
    const [currentIndex, setcurrentIndex] = useState(-1)
    const dispatch = useDispatch()
    const playMusic = useCallback(
        (id) => {
            
            dispatch(getSongDetail(id))
        },
        [dispatch],
    )
    return <>
          <div className="left listtopall" >
                <dt className="listtop">
                    <div className="listtopimg msk sprite_cover">

                        <img className="j-img"  src={titleImg} alt=""/>
                        <NavLink className="msk sprite_cover" to={"/song?id="+id}>
                            
                        </NavLink>
                    </div>
                    <div className="listtopimgright">
                        <NavLink to={"/song?id="+id}>
                            <h3>{title}</h3>
                        </NavLink>
                        <span className="leftspan s-bg-9 sprite_02 ">    
                        </span>
                        <span className="rightspan s-bg-10 sprite_02">
                            
                        </span>
                      
                        
                    </div>
                    
                </dt>
                <dd>
                    <ul>
                        {
                            typeList.slice(0, 10).map((item, index) => {
                                return <li key={item.id} className={(currentIndex === index)?"showli":""}  onMouseOver={(e)=>{
                                    setcurrentIndex(index)
                                }} onMouseOut={(e)=>{setcurrentIndex(-1)}}>
                                    < span className = {
                                        (index < 3) ? "spanindex spanred" : "spanindex"
                                    }>
                                        {index+1}
                                    </span>
                                    <NavLink className="topa spanlink" to={"/song?id="+item.id}>{item.name}</NavLink>
                                    <div className="liicon" >
                                        <span className="clsplay clsblc sprite_02" onClick={(e)=>{playMusic(item.id)}}>

                                        </span>
                                        <span className="clsadd clsblc icons">

                                        </span>
                                        <span className="clsaddme clsblc sprite_02">

                                        </span>
                                    </div>
                                                    
                                                </li>
                                        })}
                                    <li>

                                    <NavLink className="topa" to={"/song?id="+id}>查看全部{">"}</NavLink>

                    
                        </li>
                    </ul>
                   
                </dd>
                
            </div>
            
    </>
}

export default memo(XJFTopcps);
