import React from 'react'
import { useLocation } from 'react-router-dom'

const Signup = () => {
  let location = useLocation()

  return (
    <div>
      <p>Sign Up</p>
      <form>
        <div>
          <label htmlFor='firstName'>E-mail</label>
          <input type='text' name='firstName'></input>
        </div>
        <div>
          <label htmlFor='lastName'>E-mail</label>
          <input type='text' name='lastName'></input>
        </div>
        <div>
          <label htmlFor='email'>E-mail</label>
          <input type='email' name='email'></input>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password'></input>
        </div>
        <div>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input type='password' name='confirmPassword'></input>
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
