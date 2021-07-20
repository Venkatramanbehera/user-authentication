import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Account = (props) => {

    const [ user, setUser ] = useState({})

    useEffect(() => {
        axios.get('http://dct-user-auth.herokuapp.com/users/account',{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data
            setUser(result)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <div>
            <h1>User Account</h1>
            <h2> Email  -  {user.email} </h2>
            <h2> User Name - { user.username }</h2>
        </div>
    )
}

export default Account
