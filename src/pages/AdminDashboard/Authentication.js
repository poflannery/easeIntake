import { Button, TextField } from '@mui/material'
import { IconArrowLeft } from '@tabler/icons';
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Authentication() {

// local state
const [user,setUser] = useState('')
const [pass,setPass] = useState('')


// router
const navigate = useNavigate();

// authentication method
const handleAdminLogin = () => {
  if (user === 'admin' && pass === 'admin') {
    navigate('/admin/dashboard')
  }
}



// return \\
  return (
    <div className=' container__fullpage grid authentication__layout'>
      <div className='auth__layout__messageBanner'>
        
      </div>
      <div className='auth__layout__titleBanner'>
        <h3>Submit a New Ticket</h3>
        <div onClick={() => navigate('/')}><IconArrowLeft /><p1>Return to Home Screen</p1></div>
      </div>
      <div className='submit__ticket__content grid'>
            <div className='submit__ticket__container input__narrow centered'>
                        <TextField
                        variant='outlined'
                        size='small'
                        className='sidebar__left_search__input' 
                        placeholder='Username...'
                        onChange={(e) => setUser(e.target.value)}
                        />
                        <p is='custom' />
                        <TextField
                        type='password'
                        variant='outlined'
                        size='small'
                        className='sidebar__left_search__input' 
                        placeholder='Password...'
                        onChange={(e) => setPass(e.target.value)}
                        />
                    <Button variant='contained' sx={{marginTop: '1rem'}} onClick={handleAdminLogin}>Login</Button>
            </div>
        </div>
    </div>
  )
}
