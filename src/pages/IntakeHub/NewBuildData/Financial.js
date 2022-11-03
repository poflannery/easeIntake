import { Button, TextField } from '@mui/material'
import React from 'react'

export default function Financial() {
  return (
    <>
          <p3 is="custom">Financial Plans</p3>
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          placeholder='Number of Plans...'
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          placeholder='Carriers...'
          />
          </div>
          <p3 is="custom">Types of Plans and additional details. Please include if HSA/HRA/FSA plans will be on ease.</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Describe additional details about the plans or unique circumstances...'
          multiline
          rows={2}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}}>Check Required Fields</Button> {/* Check Required fields, then save data button appears*/}
    </>
  )
}
