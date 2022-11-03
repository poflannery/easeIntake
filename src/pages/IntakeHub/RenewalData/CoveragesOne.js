import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import React from 'react'

export default function CoveragesOneRenewal() {




  return (
    <>
          <p3 is="custom">Plan Changes</p3>
          <FormControlLabel className='FormControlLabel' control={<Checkbox size='small' />} label='Medical Plan Changes' />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Medical Change Details Here...include # of plans if changing'
          multiline
          rows={4}
          />
          <FormControlLabel className='FormControlLabel' control={<Checkbox size='small' />} label='Dental Plan Changes' />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Dental Change Details Here...include # of plans if changing'
          multiline
          rows={4}
          />
          <FormControlLabel className='FormControlLabel' control={<Checkbox size='small' />} label='Vision Plan Changes' />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Vision Change Details Here...include # of plans if changing'
          multiline
          rows={4}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}}>Save Information</Button>
    </>
  )
}
