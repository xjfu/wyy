import React, {
    memo,
    useEffect,
} from 'react'

import {
    shallowEqual,
    useSelector, useDispatch,
} from 'react-redux';
import {  } from '../../../../services/djradio';
import { getDjProgramRecommendAction } from './store/createaction';
import {WrapXJFDjradio} from './style';
function XJFDjradio(props) {
    const dispatch = useDispatch()
    const {
        djProgramRecommend,
    } = useSelector((state) => ({
        djProgramRecommend:state.djradio.get("djProgramRecommend")
    }), shallowEqual)
    useEffect(() => {
        dispatch(getDjProgramRecommendAction())
    }, [dispatch])
    return (
        <WrapXJFDjradio>
            <div className="w980">
                {djProgramRecommend.map((item, index)=>{
                        return <li key={item.name}>
                            {item.name}
                        </li>
                    })
                }
            </div>
        </WrapXJFDjradio>
    )
}


export default memo(XJFDjradio);



