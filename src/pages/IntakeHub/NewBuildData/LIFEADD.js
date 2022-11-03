import { Button, TextField } from '@mui/material'
import React from 'react'

export default function LIFEADD() {
  return (
    <>
          <p3 is="custom">Group Name</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Name...'
          />
          <p3 is="custom">City</p3>
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          placeholder='City...'
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          placeholder='State...'
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          placeholder='Zip Code...'
          />
          </div>
          <p3 is="custom">Data Entry</p3>
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          placeholder='SIC Code...'
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          placeholder='Federal Tax ID...'
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          placeholder='Website...'
          />
          </div>
          <Button variant='contained' sx={{marginTop: '1rem'}}>Check Required Fields</Button> {/* Check Required fields, then save data button appears*/}
    </>
  )
}
