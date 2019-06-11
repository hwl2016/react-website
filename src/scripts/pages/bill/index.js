import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'
import fastclick from 'fastclick'
import JobCata from './JobCata'

fastclick.attach(document.body)

ReactDom.render(
    <JobCata />
    , document.getElementById('root')
)


