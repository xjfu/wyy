import {
    memo,
    useState,
    useEffect,
    useCallback,
} from 'react'
import {useDispatch} from 'react-redux'
import { dpIndexAction } from '../store/createaction'

import {
    
    WrapXJFDbpages
} from './style'

function PagesMap(props) {
    const [idx, setidx] = useState(1)
    const dispatch = useDispatch()
    const {
        allPage, 
    } = props 
    
    useEffect(() => {
        dispatch(dpIndexAction(idx))
    }, [dispatch, idx])

    const changePage = useCallback(
        (index) => {
            
            if (idx === 1 && index === -1) {
                return 
            } else if (idx === allPage && index === 1) {
                return
            } else {
                setidx(index+idx)
            }
        },
        [idx, allPage],
    )
    if (idx < 6 && allPage<=9) {
        return <> 
        <button onClick={(e)=>{changePage(-1)}}>
            上一页
        </button>
        {/* <span onClick={(e)=>{setidx(idx=>idx=1)}}  className={1 === idx?"active":"zpgi"}>1</span> */}
            {new Array(allPage).fill(0).map((item, index)=>{
                return <span onClick={(e)=>{setidx(idx=>idx=index+1)}}  className={index === idx-1?"active":"zpgi"} key={index} >{index+1}</span>
            })}
            
        {/* <span onClick={(e)=>{setidx(idx=>idx=allPage)}} className={allPage === idx?"active":"zpgi"}>{allPage}</span> */}
        <button onClick={(e)=>{changePage(1)}} >
            下一页
        </button>
    </> 
    } else if (idx < 6) {
        return <> 
        <button onClick={(e)=>{changePage(-1)}}>
            上一页
        </button>
        <span onClick={(e)=>{setidx(idx=>idx=1)}}  className={1 === idx?"active":"zpgi"}>1</span>
            {[2, 3, 4, 5, 6, 7, 8].map((item, index)=>{
                return <span onClick={(e)=>{setidx(idx=>idx=item)}}  className={item === idx?"active":"zpgi"} key={item} >{item}</span>
            })}
            {"..."}
        <span onClick={(e)=>{setidx(idx=>idx=allPage)}} className={allPage === idx?"active":"zpgi"}>{allPage}</span>
        <button onClick={(e)=>{changePage(1)}} >
            下一页
        </button>
    </> 

    } else if (idx >= 6 && idx < allPage-5) {
        return <> 
        <button onClick={(e)=>{changePage(-1)}} >
            上一页
        </button>
        <span onClick={(e)=>{setidx(idx=>idx=1)}}  className={1 === idx?"active":"zpgi"}>1</span>            
            {"..."}
            {
                [idx - 3, idx - 2, idx - 1, idx, idx + 1, idx + 2, idx + 3].map((item, index) => {
                return <span onClick={(e)=>{setidx(idx=>idx=item)}}  className={item === idx?"active":"zpgi"} key={item} >{item}</span>
            })}
            {"..."}
        <span onClick={(e)=>{setidx(idx=>idx=allPage)}} className={allPage === idx?"active":"zpgi"}>{allPage}</span>
        <button onClick={(e)=>{changePage(1)}} >
            下一页
        </button>
    </> 

    } else {
        return <>   
        <button onClick={(e)=>{changePage(-1)}}>
            上一页
        </button>   
        <span onClick={(e)=>{setidx(idx=>idx=1)}}  className={1 === idx?"active":"zpgi"}>1</span>            
            {"..."}
            {[allPage-7,allPage-6, allPage-5, allPage-4, allPage-3, allPage-2, allPage-1].map((item, index)=>{
                return <span onClick={(e)=>{setidx(idx=>idx=item)}}  className={item === idx?"active":"zpgi"} key={item} >{item}</span>
            })}
            
        <span onClick={(e)=>{setidx(idx=>idx=allPage)}} className={allPage === idx?"active":"zpgi"}>{allPage}</span>
         <button onClick={(e)=>{changePage(1)}}>
            下一页
        </button>
    </> 
    } 
}

function XJFDbpages(props) {
    
    const {
        count, 
        onePage,
    } = props
    
    const allPage = Math.ceil(parseInt(count) / onePage) || 0
    
    
        return(
            <WrapXJFDbpages>
            <div className="u-page">
                            
                   
                   <PagesMap allPage = {allPage}></PagesMap>
                
            </div>
        </WrapXJFDbpages>
        )
    
    
}
export default memo(XJFDbpages);
