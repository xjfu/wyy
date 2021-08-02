import React, {
    memo,
    useEffect,
} from 'react'
import {
    useSelector,
    shallowEqual,
    useDispatch,
} from 'react-redux'
import {WrapXJFAlbumDesc} from './style'
import XJFTopMenu from '@/components/topmenu'
import {
    getAlbumDescAction,
    getAlbumCommentAction,
    // getAlbumCommentTatalAction,
} from '../store/createaction';
import {
    getParamSearch,
    getImgFormat
} from '@/utils/tools';
import XJFComments from '@/pages/play/songLyric/comments'
import XJFDbpages from '@/pages/play/dbpages';
function XJFAlbumDesc(props) {
    const dispatch = useDispatch()
    const {
        location
    } = props
    const {
        id,
    } = getParamSearch(location.search)

    const {
        albumDesc,
        albumComment,
        dpIndex,
        albumCommentTatal,
    } = useSelector((state) => ({
        albumDesc: state.album.get("albumDesc"),
        albumComment: state.album.get("albumComment"),
        dpIndex: state.play.get("dpIndex"),
        albumCommentTatal: state.album.get("albumCommentTatal"),
    }), shallowEqual)
    useEffect(() => {
        dispatch(getAlbumDescAction(id))
        dispatch(getAlbumCommentAction(id, 20, (dpIndex-1) * 20))
        // dispatch(getAlbumCommentTatalAction(id, 20, dpIndex * 20))
    }, [dispatch, id, dpIndex])
    return (
        <WrapXJFAlbumDesc>
            <XJFTopMenu></XJFTopMenu>

            <div className="w980">
                <img src={getImgFormat(albumDesc.picUrl, 177, 177)} alt=""/>
                {
                    albumDesc.description
                }
                
                <h1>
                    精彩评论
                </h1>
                <XJFComments comments={albumComment}></XJFComments>  
                
                <XJFDbpages count={albumCommentTatal} onePage={20}></XJFDbpages>
            </div>

           

        </WrapXJFAlbumDesc>
        
    )
}


export default memo(XJFAlbumDesc);



