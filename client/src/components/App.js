// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Newsfeed from './Newsfeed'
import Calendar from './Calendar'
import Corkboard from './Corkboard'
import Checkbook from './Checkbook'
import Profile from './Profile'

function App() {
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    fetch("/authorized_user")
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((user) => {
              updateUser(user);
            });
        }
      })
  }, [])

  const updateUser = (user) => setCurrentUser(user)

  return (
    <div className='w-full h-screen flex justify-center align-middle'>
      <header className='absolute'>
        <Nav user={currentUser}/>
      </header>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login updateUser={updateUser}/>}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/feed' element={<Newsfeed />}></Route>
        <Route path='/calendar' element={<Calendar />}></Route>
        <Route path='/corkboard' element={<Corkboard />}></Route>
        <Route path='/checkbook' element={<Checkbook />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </div>
  )
}

export default App
