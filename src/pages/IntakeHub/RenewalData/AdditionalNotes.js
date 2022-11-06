import { Button, TextField } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function AdditionalNotesRenewal() {


// redux
const store = useSelector(state => state.renewalValues)




  return (
    <>
          <p3 is="custom">Enter any additional details about the renewal here</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Details'
          multiline
          rows={4}
          defaultValue={store.additionalNotes}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}}>Save Information</Button>
    </>
  )
}
