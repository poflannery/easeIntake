import { Button, TextField } from '@mui/material'
import React from 'react'

export default function RatesRenewal() {
  return (
    <>
          <p3 is="custom">Only use this form to provide a broad overview of rate changes. Detail specifics in document upload.</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Rate Changes...'
          multiline
          rows={4}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}}>Save Information</Button>
    </>
  )
}
