import React, {
    memo,
    
} from 'react'
import {
    DiscoverWrapper, TopMenu
} from './style'
import {topMenu} from '@/common/local-data'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import {renderRoutes} from 'react-router-config'
// import recommend from './c-pages/recommend';

// import routes from './router'
function XJFDiscover(props) {
    const {
        route
    } = props
   
    return (
        <DiscoverWrapper>
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
           {/* <div className="content"> */}
                {
                    renderRoutes(route.routes)
                }
            {/* </div> */}
        </DiscoverWrapper>
    )



}

// const mapStateToProps = state => {
//     return {
//         recommend: state.recommend,
//     }
// };
// const mapDispatchToProps = dispatch => {
//     return {
        
//         getHomeData: function () {
//             dispatch(changeRecommandAction)
//         }
//     }
// };

export default memo(XJFDiscover);



