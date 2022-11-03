import { Button, MenuItem, TextField } from '@mui/material'
import React from 'react'

export default function Eligibility() {
  return (
    <>
          <p3 is="custom">Eligibility Classes</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='List Classes'
          />
          <p3 is="custom">Details</p3>
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          placeholder='Minimum Hours'
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          label='Benefit Termination'
          select
          >
            <MenuItem value='Immediate'>Immediate</MenuItem>
            <MenuItem value='End of the Month'>End of the Month</MenuItem>
            <MenuItem value='15th of the Month'>15th of the Month</MenuItem>
            <MenuItem value='End of Second Month'>End of Second Month</MenuItem>
          </TextField>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          label='Waiting Period'
          name='Waiting Period'
          select
          >
            <MenuItem value='Immediate'>Immediate</MenuItem>
            <MenuItem value='Immediate'>0 Days FOM</MenuItem>
            <MenuItem value='Immediate'>30 Days FOM</MenuItem>
            <MenuItem value='Immediate'>30 Days FOMF</MenuItem>
            <MenuItem value='Immediate'>60 Days FOM</MenuItem>
            <MenuItem value='Immediate'>60 Days FOMF</MenuItem>
            <MenuItem value='Immediate'>90 Days FOM</MenuItem>
            <MenuItem value='Immediate'>90 Days FOMF</MenuItem>
            <MenuItem value='Immediate'>15th of the Month</MenuItem>
            <MenuItem value='Immediate'>Semi-Annual</MenuItem>
            <MenuItem value='Immediate'>Quarterly</MenuItem>
            <MenuItem value='Immediate'>Other... list in details</MenuItem>
          </TextField>
          </div>
          <p3 is="custom">Additional</p3>
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          label='Payroll Schedule'
          name='Payroll Schedule'
          select
          >
          <MenuItem value='Weekly'>Weekly</MenuItem>
          <MenuItem value='Bi-Weekly'>Bi-Weekly</MenuItem>
            <MenuItem value='Semi-Monthly'>Semi-Monthly</MenuItem>
            <MenuItem value='Monthly'>Monthly</MenuItem>
          </TextField>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          label='Interested in Ease Payroll?'
          name='Interested in Ease Payroll?'
          select
          >
          <MenuItem value='Yes'>Yes</MenuItem>
          <MenuItem value='No'>No</MenuItem>
          </TextField>
          </div>
          <p3 is="custom">Extra Eligibility Notes</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Enter any additional details regarding eligibility...'
          multiline
          rows={4}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}}>Check Required Fields</Button> {/* Check Required fields, then save data button appears*/}
    </>
  )
}
