import { Button, TextField } from '@mui/material'
import React from 'react'

export default function AdditionalNotes() {
  return (
    <>
          <p3 is="custom">Enter any additional details here</p3>
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
