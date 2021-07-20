import React from 'react'
import { Link, Route } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'

const App = (props) => {
  return (
    <div>
      <h1>User Auth</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Route path="/" component={ Home } exact={ true }/>
      <Route path="/register" component={ Register}/>
      <Route path="/login" component={ Login}/>
    </div>
  )
}

export default App
