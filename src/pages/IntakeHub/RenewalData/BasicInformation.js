import { Button, TextField } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function BasicInformationRenewal() {


// redux
const store = useSelector(state => state.renewalValues)


  return (
    <>
          <p3 is="custom">Group Name</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Name...'
          defaultValue={store.groupName}
          />
          <p3 is="custom">City</p3>
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          placeholder='City...'
          defaultValue={store.city}
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          placeholder='State...'
          defaultValue={store.state}
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          placeholder='Zip Code...'
          defaultValue={store.zip}
          />
          </div>
          <p3 is="custom">Data Entry</p3>
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          placeholder='SIC Code...'
          defaultValue={store.sicCode}
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          placeholder='Federal Tax ID...'
          defaultValue={store.fein}
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          placeholder='Website...'
          defaultValue={store.website}
          />
          </div>
          <Button variant='contained' sx={{marginTop: '1rem'}}>Check Required Fields</Button> {/* Check Required fields, then save data button appears*/}
    </>
  )
}
