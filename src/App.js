import React, { memo } from 'react'
import {renderRoutes} from 'react-router-config'
import {
    HashRouter,
} from 'react-router-dom'
import routes from './router'

import XJFAppFooter from '@/components/appfooter'
import XJFAppHeader from '@/components/appheader'
import XJFPlayMusic from '@/pages/play/c-nps/bar'
const App = memo(function App(props) {
    return (
        <HashRouter>
                <XJFPlayMusic>
                </XJFPlayMusic> 
                <XJFAppHeader></XJFAppHeader>
                {
                    renderRoutes(routes)
                }
               
            
            <XJFAppFooter></XJFAppFooter>
            
            
        </HashRouter>

    )
})



export default App
