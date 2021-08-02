import React, {
    memo
} from 'react'
import {Link} from 'react-router-dom'
import {
    WrapArtistLeft
} from './style'
function ArtistLeft(props) {
    return (
<WrapArtistLeft>
    <div className="container">
    <div className="g-wrap4 n-sgernav" id="singer-cat-nav">
        <h2 className="tit">推荐</h2>
        <ul className="nav f-cb">
        <li>
            <Link to="/discover/artist/" className="cat-flag z-slt">推荐歌手</Link>
        </li>
        <li>
            <Link to="/discover/artist/signed/" className="cat-flag" data-cat="5001">入驻歌手</Link>
        </li>
        </ul>
        <div className="blk">
        <h2 className="tit">华语</h2>
        <ul className="nav f-cb">
            <li>
            <Link to="/discover/artist/cat?id=1001" className="cat-flag" data-cat="1001">华语男歌手</Link>
            </li>
            <li>
            <Link to="/discover/artist/cat?id=1002" className="cat-flag" data-cat="1002">华语女歌手</Link>
            </li>
            <li>
            <Link to="/discover/artist/cat?id=1003" className="cat-flag" data-cat="1003">华语组合/乐队</Link>
            </li>
        </ul>
        </div>
        <div className="blk">
        <h2 className="tit">欧美</h2>
        <ul className="nav f-cb">
            <li>
            <Link to="/discover/artist/cat?id=2001" className="cat-flag" data-cat="2001">欧美男歌手</Link>
            </li>
            <li>
            <Link to="/discover/artist/cat?id=2002" className="cat-flag" data-cat="2002">欧美女歌手</Link>
            </li>
            <li>
            <Link to="/discover/artist/cat?id=2003" className="cat-flag" data-cat="2003">欧美组合/乐队</Link>
            </li>
        </ul>
        </div>
        <div className="blk">
        <h2 className="tit">日本</h2>
        <ul className="nav f-cb">
            <li>
            <Link to="/discover/artist/cat?id=6001" className="cat-flag" data-cat="6001">日本男歌手</Link>
            </li>
            <li>
            <Link to="/discover/artist/cat?id=6002" className="cat-flag" data-cat="6002">日本女歌手</Link>
            </li>
            <li>
            <Link to="/discover/artist/cat?id=6003" className="cat-flag" data-cat="6003">日本组合/乐队</Link>
            </li>
        </ul>
        </div>
        <div className="blk">
        <h2 className="tit">韩国</h2>
        <ul className="nav f-cb">
            <li>
            <Link to="/discover/artist/cat?id=7001" className="cat-flag" data-cat="7001">韩国男歌手</Link>
            </li>
            <li>
            <Link to="/discover/artist/cat?id=7002" className="cat-flag" data-cat="7002">韩国女歌手</Link>
            </li>
            <li>
            <Link to="/discover/artist/cat?id=7003" className="cat-flag" data-cat="7003">韩国组合/乐队</Link>
            </li>
        </ul>
        </div>
        <div className="blk">
        <h2 className="tit">其他</h2>
        <ul className="nav f-cb">
            <li>
            <Link to="/discover/artist/cat?id=4001" className="cat-flag" data-cat="4001">其他男歌手</Link>
            </li>
            <li>
            <Link to="/discover/artist/cat?id=4002" className="cat-flag" data-cat="4002">其他女歌手</Link>
            </li>
            <li>
            <Link to="/discover/artist/cat?id=4003" className="cat-flag" data-cat="4003">其他组合/乐队</Link>
            </li>
        </ul>
        </div>
    </div>
    </div>
</WrapArtistLeft>
        
    )
}


export default memo(ArtistLeft);



