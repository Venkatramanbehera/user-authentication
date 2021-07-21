import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import Register from './Register'
import Account from './Account'
import MyNotesContainer from './MyNotesContainer'

const Navbar = (props) => {
    const { userLogin, handleAuth } = props
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {
                    userLogin ? (
                        <React.Fragment>
                            <li><Link to="/account">Account</Link></li>
                            <li><Link to="/mynotes">My Notes</Link></li>
                            <li><Link to="" onClick = { () => {
                                localStorage.removeItem('token')
                                alert('successfully logout')
                                handleAuth()
                                props.history.push('/')
                            }}>Logout</Link></li>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </React.Fragment>
                    )
                }
                
            </ul>
            <Route path="/" component={ Home } exact={ true }/>
            <Route path="/register" component={ Register}/>
            <Route path="/login" render = { (props) => {
                return <Login {...props} handleAuth={ handleAuth }/>
            }} />
            <Route path="/account" component={ Account }/>
            <Route path="/mynotes" component={ MyNotesContainer }/>
        </div>
    )
}

export default withRouter(Navbar)
