import React from 'react'
import ActionButton from './ActionButton'

const Nav = ({ user }) => {
  return (
    <div className={user ? 'nav' : 'nav active'}>
      <div className='link-wrapper'>
        <div className='link-button'>
          <p>Newsfeed</p>
        </div>
      </div>
      <div className='link-wrapper'>
        <div className='link-button'>
          <p>Calendar</p>
        </div>
      </div>
      <div className='link-wrapper'>
        <div className='link-button'>
          <p>Corkboard</p>
        </div>
      </div>
      <ActionButton />
      <div className='link-wrapper'>
        <div className='link-button'>
          <p>Checkbook</p>
        </div>
      </div>
      <div className='link-wrapper'>
        <div className='link-button'>
          <p>Profile</p>
        </div>
      </div>
      <div className='link-wrapper'>
        <div className='link-button'>
          <p>Log Out</p>
        </div>
      </div>
    </div>
  )
}

export default Nav
