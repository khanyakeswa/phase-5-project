// import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = ({ updateUser }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState([])
  const { email, password } = formData

  function submitHandler(e) {
    e.preventDefault()
    const user = {
      email,
      password,
    }

    fetch(`/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          updateUser(user)
          navigate(`/users/${user.id}`)
        })
      } else {
        res.json().then((json) => setErrors(json.errors))
      }
    })
  }

  const changeHandler = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className='component-wrapper'>
      <p className='component-title'>Log In</p>
      <form className='form-a'>
        <div>
          <label className='input-label-a' htmlFor='email'>
            E-mail
          </label>
          <input
            className='input-a'
            placeholder='you@email.com'
            type='email'
            name='email'
            value={email}
            onChange={changeHandler}
          ></input>
        </div>
        <div>
          <label className='input-label-a' htmlFor='password'>Password</label>
          <input
            className='input-a'
            type='password'
            name='password'
            value={password}
            onChange={changeHandler}
          ></input>
        </div>
        <button className='button-a' onClick={submitHandler} type='submit'>
          Sign In
        </button>
        {errors ? <div>{errors}</div> : null}
      </form>
    </div>
  )
}

export default Login
