import axios from 'axios'
import React, { useState } from 'react'

const Login = (props) => {

    const { handleAuth } = props

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        if( name === 'email'){
            setEmail(value)
        }else{
            setPassword(value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email : email,
            password : password
        }
        // console.log(formData)

        axios.post('http://dct-user-auth.herokuapp.com/users/login',formData)
            .then((Response) => {
                const result = Response.data
                if( result.hasOwnProperty('errors')){
                    alert(result.errors)
                }else{
                    alert('Successfully Login')
                    localStorage.setItem('token',result.token)
                    props.history.push('/')
                    handleAuth()
                }
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Enter email address" 
                    value={ email } 
                    onChange={ handleChange }
                /> <br />
                <br />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Enter password" 
                    value={ password } 
                    onChange={ handleChange }
                /> <br />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login
