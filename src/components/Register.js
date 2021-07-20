import axios from 'axios'
import React, { useState } from 'react'

const Register = (props) => {

    const [ userName, setUserName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleChange = (e) => {
        const { name,value } = e.target

        if( name === 'userName') {
            setUserName(value)
        } else if( name === 'email'){
            setEmail(value)
        } else if( name === 'password'){
            setPassword(value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username : userName,
            password : password,
            email : email
        }

        // after validation

        axios.post('http://dct-user-auth.herokuapp.com/users/register',formData)
            .then((res) => {
                const result = res.data
                if( result.hasOwnProperty('errors')){
                    alert(result.message)
                }else{
                    alert('successfully created')
                    props.history.push('/login')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Register Form</h1>
            <form onSubmit={ handleSubmit }>
                <label> UserName </label> <br />
                <input type="text" placeholder="Enter UserName" value={ userName } name="userName" onChange={ handleChange }/> <br />

                <label> email </label> <br />
                <input type="email" placeholder="Enter Email" value={ email } name="email" onChange={ handleChange }/> <br />

                <label> Password </label> <br />
                <input type="text" placeholder="Enter Password" value={ password } name="password" onChange={ handleChange }/> <br /> 
                <br />
                <input type="submit" value="Register" />
                
            </form>
        </div>
    )
}

export default Register
