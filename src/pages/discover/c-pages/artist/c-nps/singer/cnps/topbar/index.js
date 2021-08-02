import React, { memo } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import {WrapTopbar} from './style'
const Topbar = memo(function index(props) {
    const {
        id
    } = props
    
    return (
        < WrapTopbar>
            <div className="container">
                <NavLink to={"/artist?id="+id} exact>热门作品</NavLink>
                <NavLink to={"/artist/album?id="+id}>所有专辑</NavLink>
                <NavLink to={"/artist/mv?id="+id}>相关MV</NavLink>
                <NavLink to={"/artist/desc?id="+id}>艺人介绍</NavLink>
            </div>
         
        </WrapTopbar>
    )
})


export default Topbar
