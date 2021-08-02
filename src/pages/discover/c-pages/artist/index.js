import React, {
    memo,
} from 'react'
import {
    WrapXJFDiscoverArtist,
    Wrapright,
    WrapLeft,

} from './style'
import ArtistLeft from '../artist/artistleft'
import ArtistRight from '../artist/artistright'
function XJFDiscoverArtist(prbops) {
    

    return (
        <WrapXJFDiscoverArtist>
            <div className="w980 container">
                <WrapLeft>
                    <ArtistLeft/>
                </WrapLeft>
                <Wrapright>
                    <ArtistRight />
                </Wrapright>
            </div>
        </WrapXJFDiscoverArtist>
    )
}


export default memo(XJFDiscoverArtist);



