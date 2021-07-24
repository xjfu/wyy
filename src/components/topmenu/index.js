import React, {
    memo,
    
} from 'react'
import {
    WrapXJFTopMenu,
    TopMenu
} from './style'
import {topMenu} from '@/common/local-data'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'


// 
function XJFTopMenu(props) {
   
   
    return (
        <WrapXJFTopMenu> 
            <div className="discoverheader">
                <div className="w1100 topMenu">
                    <TopMenu >
                        {topMenu.map((item, index)=>{
                            return <li key={item.title}>
                                <NavLink to={item.link}>
                                    
                                    <em>{item.title}</em>
                                    
                                </NavLink>
                                
                            </li>
                        })}
                    </TopMenu>
                </div>
               
            
            </div>
        </WrapXJFTopMenu>
        
           
    )
}

export default memo(XJFTopMenu);