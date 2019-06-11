import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import fastclick from 'fastclick'

import App from './App.jsx'
import Login from '../../container/login'
import Register from '../../container/register'

fastclick.attach(document.body)

ReactDom.render(
    <BrowserRouter>
        <div>React SSR...</div>
        <div>
            <Route path='/' exact component={ App }></Route>
            <Route path='/login' component={ Login }></Route>
            <Route path='/register' component={ Register }></Route>
        </div>
    </BrowserRouter>
    , document.getElementById('root')
)