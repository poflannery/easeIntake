

// MUI Imports
import { Button } from '@mui/material'

// React Imports
import React from 'react'
import { useNavigate } from 'react-router'

// Router Imports


export default function Authentication() {

  // router
  const navigate = useNavigate();




  return (
    <div className=' container__fullpage grid authentication__layout'>
      <div className='auth__layout__messageBanner'>
        <p3 is='custom'>A new layout has launched. Please enjoy the new features. <span>Click here for log in credentials</span>.</p3>
      </div>
      <div className='auth__layout__titleBanner'>
        <h3>Welcome to the OneDigital | Ease hub</h3>
      </div>
      <div className='auth__layout__content grid'>
        <div className='homepage__center__content'>
          <div className='homepage__paper'>
            <div className='div_column'>
              <h1>Ease Intake Hub</h1>
              <p1 is='custom'>Review and submit an intake form as the first step to requesting an ease build or renewal</p1>
              <Button variant='contained' onClick={() => navigate('/dashboard/intakeHub')}>Launch Intake</Button>
            </div>
            <div className='div_column'>
              <h1>Ticket Support Desk</h1>
              <p1 is='custom'>Are you having an issue with ease or do you need to request a build update? Click here to submit a ticket for your Benefits Technology Specialist.</p1>
              <Button variant='contained' onClick={() => navigate('/requestassistance')}>Launch Help Desk</Button>
            </div>
            <div className='div_column disabled__card'>
              <h1>O.E. Tracker</h1>
              <p1 is='custom'>Track groups that are live for open enrollment. Print reports on enrollment progress, ongoing issues and more. </p1>
              <Button variant='contained' className='disabled__button'>Launch Date TBD</Button>
            </div>
            <div className='div_column'>
              <h1>Administrator Login</h1>
              <p1 is='custom'>Access has been restricted to admin accounts only.</p1>
              <Button variant='contained'>Admin Login</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
