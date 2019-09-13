import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Capstone from './components/Capstone'
import './index.css'

ReactDOM.render (
  <Router>
      <Capstone />
  </Router>
  , document.getElementById('root'))
