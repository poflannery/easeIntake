import { Button, TextField } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function RatesRenewal() {


// redux
const store = useSelector(state => state.renewalValues)


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
          defaultValue={store.rates}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}}>Save Information</Button>
    </>
  )
}
