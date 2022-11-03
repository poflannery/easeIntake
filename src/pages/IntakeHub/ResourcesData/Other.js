import { Button, TextField } from '@mui/material'
import React from 'react'

export default function OtherResources() {
  return (
    <>
          <p3 is="custom">Enter Any Additional Details Here</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Details'
          multiline
          rows={4}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}}>Save Information</Button>
    </>
  )
}
