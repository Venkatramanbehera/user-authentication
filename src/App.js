import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'

const App = (props) => {
  const [ userLogin, setUserLogin ] = useState(false)

  const handleAuth = () => {
    setUserLogin(!userLogin)
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      handleAuth()
    }
  },[])

  return (
    <div>
      <h1>User Auth</h1>
      <Navbar userLogin={ userLogin } handleAuth={ handleAuth }/>
    </div>
  )
}

export default App
