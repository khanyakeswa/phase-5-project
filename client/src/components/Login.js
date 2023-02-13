import React from 'react'
import { useLocation } from 'react-router-dom'

const Login = () => {
  let location = useLocation()

  return (
    <div>
      <p>Log In</p>
      <form>
        <div>
            <label htmlFor='email'>E-mail</label>
        <input type="email" name="email"></input>
        </div>
        <div>
            <label htmlFor='password'>Password</label>
        <input type="password" name="password"></input>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default Login