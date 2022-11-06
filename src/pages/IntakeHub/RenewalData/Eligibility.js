import { Button, TextField } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function EligibilityRenewal() {


// redux
const store = useSelector(state => state.renewalValues)

  return (
    <>
          <p3 is="custom">Changes to eligibility (classes, rates, etc.)</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Type out details...'
          multiline
          rows={4}
          defaultValue={store.eligbilityChangeDetails}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}}>Save Information</Button>
    </>
  )
}
