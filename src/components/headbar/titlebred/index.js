import React, {
    memo,
} from 'react'
import {WrapTitleBtmRed} from './style'
import {
    NavLink
} from 'react-router-dom/cjs/react-router-dom.min'
function TitleBtmRed (props) {
    const {title} = props
    const {link} = props
    return (
        <WrapTitleBtmRed >
            <div className="u-title f-cb">
                <h3><span className="f-ff2">{title}</span></h3>
                {link && <NavLink to={link} data-cat="5001" className="more s-fc3">更多{">"}</NavLink>}

            </div>
        </WrapTitleBtmRed>
    )
    
}
export default memo(TitleBtmRed)