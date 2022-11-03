import { MenuItem, TextField } from '@mui/material'
import React from 'react'

export default function Downloads() {
  return (
    <>
          <p3 is="custom">Download will start automatically when chosen</p3>
          <p3 is='custom' />
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          label='Procedure Downloads'
          select
          >
            <MenuItem value='Immediate'>Immediate</MenuItem>
          </TextField>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          label='Carrier Connection Guides'
          select
          >
            <MenuItem value='Immediate'>Immediate</MenuItem>
          </TextField>
          </div>
          <p3 is='custom' />
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          label='Helpful Packet Downloads'
          select
          >
            <MenuItem value='Immediate'>Immediate</MenuItem>
          </TextField>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          label='Build Resources'
          select
          >
            <MenuItem value='Immediate'>Immediate</MenuItem>
          </TextField>
          </div>
          <p3 is='custom' />
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          label='Payroll Sheets'
          select
          >
            <MenuItem value='Immediate'>Immediate</MenuItem>
          </TextField>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          label='Additional Documents'
          select
          >
            <MenuItem value='Immediate'>Immediate</MenuItem>
          </TextField>
          </div>
    </>
  )
}
