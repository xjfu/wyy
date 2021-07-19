import XJFDiscover from "@/pages/discover";
import XJFFriend from '@/pages/friend'
import XJFMine from '@/pages/mine'
import XJFDownload from '@/pages/download'
import XJFDiscoverRecommend from '@/pages/discover/c-pages/recommend'
import XJFDiscoverTopList from '@/pages/discover/c-pages/toplist'
import XJFDiscoverPlayList from '@/pages/discover/c-pages/playlist'
import XJFDiscoverDjRadio from '@/pages/discover/c-pages/djradio'
import XJFDiscoverArtist from '@/pages/discover/c-pages/artist'
import XJFDiscoverAlbum from '@/pages/discover/c-pages/album'
import React from 'react'

import { Redirect } from "react-router-dom";
const routes = [
    { 
        path: '/', 
        exact: true, 
        render: () => <Redirect to="/discover" />
    },
    {
        path: "/discover",
        component: XJFDiscover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => <Redirect to="/discover/recommend" />,
            },
            {
                // exact: true,
                path: "/discover/recommend",
                component: XJFDiscoverRecommend,
            },
            {
                // exact: true,
                path: "/discover/toplist",
                component: XJFDiscoverTopList,
            },
            {
                // exact: true,
                path: "/discover/playlist",
                component: XJFDiscoverPlayList,
            },
            {
                // exact: true,
                path: "/discover/djradio",
                component: XJFDiscoverDjRadio,
            },
            {
                // exact: true,
                path: "/discover/artist",
                component: XJFDiscoverArtist,
            },
            {
                // exact: true,
                path: "/discover/album",
                component: XJFDiscoverAlbum,
            },

        ]
    },
    {
        // exact: true,
        path: "/mine",
        component: XJFMine,
    },
    {
        path: "/friend",
        // exact: true,
        component: XJFFriend,
    },
    {
        path: "/download",
        // exact: true,
        component: XJFDownload,
    },
]
export default routes;