

// MUI Imports
import { Button, MenuItem, Modal, TextField } from '@mui/material'
import { useFirestoreQuery } from '@react-query-firebase/firestore';
import { collection, query } from 'firebase/firestore';

// React Imports
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router'
import { db } from '../firebase/config';
import { setUserGlobal } from '../redux/globalReducer';

// Router Imports


export default function Homepage() {

  // router
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // local State
  const [open,setOpen] = useState(false)
  const [user,setUser] = useState('')

// firebase queries
const users = query(collection(db,'users'));
const getUsers = useFirestoreQuery(['users'], users, {
  subscribe: true,
  includeMetadataChanges: true
})


// methods
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  const handleUser = () => {
    dispatch(setUserGlobal(user))
    navigate('/dashboard/intakeHub')
  }



  if (getUsers.isLoading){
    return <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading...</div>
  }
  const userData = getUsers.data

  

  return (
    <div className=' container__fullpage grid authentication__layout'>
      <div className='auth__layout__messageBanner'>
        <p3 is='custom'>A new layout has launched. Please enjoy the new features.</p3>
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
              <Button variant='contained' onClick={handleOpen}>Launch Intake</Button>
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
              <Button variant='contained' onClick={() => navigate('/login')}>Admin Login</Button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        >
          <div className='modal'>
            <h2>Choose Your Name</h2>
            <TextField
            variant='outlined'
            size='small'
            className='sidebar__left_search__input' 
            label='Benefit Termination'
            select
            onChange={(e) => setUser(e.target.value)}
            >
              {userData.docs.map(doc => {
                const data = doc.data()
                return (
                  <MenuItem value={data.name}>{data.name}</MenuItem>
                )
              })}
          </TextField>
          <Button variant='contained' disabled={user === '' ? true : false} onClick={handleUser}>Save Build</Button>
          </div>
        </Modal>
    </div>
  )
}
