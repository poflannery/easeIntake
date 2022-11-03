import { Button, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function MySaved() {

// local states
const [disabledView,setDisabledView] = useState(true)
const [disabledButton,setDisabledButton] = useState(true)


  return (
    <>
          <p1 is="custom"><b>Carefully review the following information:</b></p1>
          <p3 is='custom'>The saved intake form is to be used to retrieve previously started and exited intakes. In order to properly save an intake, you must use the 'Save Build' button in the upper left corner. The form will save as many intakes as you wish. Please begin to retrieve your intake by selecting your name, then wait for the saved intakes to populate.</p3>
          <p3 is='custom'></p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          label='User'
          select
          >
            <MenuItem value='Immediate'>Immediate</MenuItem>
          </TextField>
          <p3 is='custom' />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          label='Saved Intakes'
          disabled={disabledView}
          select
          >
            <MenuItem value='Immediate'>Immediate</MenuItem>
          </TextField>
          <Button variant='contained' sx={{marginTop: '1rem'}} disabled={disabledButton}>Retrieve Intake</Button>
    </>
  )
}
