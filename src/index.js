import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import axios from 'axios'

if (process.env.NODE_ENV === 'development') {
    const username = process.env.REACT_APP_USER
    const password = process.env.REACT_APP_PASSWORD
    axios.defaults.auth = {
        username,
        password
    }
    axios.defaults.baseURL = 'http://localhost:3000'
} else {
    axios.defaults.headers["X-userToken"] = window.zToken;
}

ReactDOM.render(<App />, document.getElementById('root'))

