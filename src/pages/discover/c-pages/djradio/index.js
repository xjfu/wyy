import React, {
    memo,
    useEffect
} from 'react';
import {
    shallowEqual, useDispatch, useSelector
} from 'react-redux';
import { } from '../../../../services/djradio';
import {
    getDjProgramRecommendAction,
    getDjProgramTopListAction
} from './store/createaction';
import { WrapXJFDjradio } from './style';

function XJFDjradio(props) {
    const dispatch = useDispatch()
    const {
        djProgramRecommend,
        // djProgramTopList,
    } = useSelector((state) => ({
        djProgramRecommend: state.djradio.get("djProgramRecommend"),

        // 节目排行板
        // djProgramTopList: state.djradio.get("djProgramTopList"),
    }), shallowEqual)
    useEffect(() => {
        dispatch(getDjProgramRecommendAction())
        dispatch(getDjProgramTopListAction())
    }, [dispatch])
    return (
        <WrapXJFDjradio>
            <div className="w980">
                {djProgramRecommend.map((item, index)=>{
                        return <li key={index}>
                            {item.name}
                        </li>
                    })
                }
                {/* {djProgramTopList.map((item, index)=>{
                        return <li key={item.name}>
                            {item.name}
                        </li>
                    })} */}
            </div>
        </WrapXJFDjradio>
    )
}


export default memo(XJFDjradio);



