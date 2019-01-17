import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import axios from 'axios'

const username = process.env.REACT_APP_USER
const password = process.env.REACT_APP_PASSWORD

axios.defaults.auth = {
    username,
    password
}

axios.defaults.baseURL = 'http://localhost:3000'

ReactDOM.render(<App />, document.getElementById('root'))

