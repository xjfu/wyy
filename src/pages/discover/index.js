import React, {
    memo,
    
} from 'react'
import {
    DiscoverWrapper, 
} from './style'
import {renderRoutes} from 'react-router-config'
// import recommend from './c-pages/recommend';
import XJFTopMenu from '@/components/topmenu'
// import routes from './router'

// 
function XJFDiscover(props) {
    const {
        route
    } = props
   
    return (
        <DiscoverWrapper>
            {/* <div className="discoverheader">
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
            
            </div> */}

           <XJFTopMenu></XJFTopMenu>
           
           
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



