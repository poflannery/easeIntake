import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMedicalChangeDetails } from '../../../redux/renewalValuesReducer';

export default function CoveragesOneRenewal() {


// redux
const dispatch = useDispatch();
const store = useSelector(state => state.renewalValues)

// ref
const medicalRef = useRef();
const dentalRef = useRef();
const visionRef = useRef();

// local states
const [medicalChecked,setMedicalChecked] = useState(false)
const [dentalChecked,setDentalChecked] = useState(false)
const [visionChecked,setVisionChecked] = useState(false)
const [medicalHiddenDetails, setMedicalHiddenDetails] = useState(true)
const [dentalHiddenDetails, setDentalHiddenDetails] = useState(true)
const [visionHiddenDetails, setVisionHiddenDetails] = useState(true)
const [medicalDetails,setMedicalDetails] = useState(store.medicalChangeDetails)
const [dentalDetails,setDentalDetails] = useState(store.dentalChangeDetails)
const [visionDetails,setVisionDetails] = useState(store.visionChangeDetails)

//methods
const eraseMedicalDetails = () => {
  medicalRef.current.value = ''
}
const eraseDentalDetails = () => {
  dentalRef.current.value = ''
}
const eraseVisionDetails = () => {
  visionRef.current.value = ''
}







// return \\
  return (
    <>
          <p3 is="custom">Plan Changes</p3>
          <FormControlLabel className='FormControlLabel' control={<Checkbox size='small' checked={medicalChecked} onClick={() => setMedicalChecked(!medicalChecked)} onChange={() => {setMedicalHiddenDetails(!medicalHiddenDetails);eraseMedicalDetails()}} />} label='Medical Plan Changes' />
          <TextField
          inputRef={medicalRef}
          sx={{display: medicalHiddenDetails ? 'none !important' : 'inline-block'}}
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Medical Change Details Here...include # of plans if changing'
          multiline
          rows={4}
          />
          <FormControlLabel className='FormControlLabel' control={<Checkbox size='small' checked={dentalChecked} onClick={() => setDentalChecked(!dentalChecked)} onChange={() => {setDentalHiddenDetails(!dentalHiddenDetails);eraseDentalDetails()}} />} label='Dental Plan Changes' />
          <TextField
          inputRef={dentalRef}
          sx={{display: dentalHiddenDetails ? 'none !important' : 'inline-block'}}
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Dental Change Details Here...include # of plans if changing'
          multiline
          rows={4}
          />
          <FormControlLabel className='FormControlLabel' control={<Checkbox size='small' checked={visionChecked} onClick={() => setVisionChecked(!visionChecked)} onChange={() => {setVisionHiddenDetails(!visionHiddenDetails);eraseVisionDetails()}} />} label='Vision Plan Changes' />
          <TextField
          inputRef={visionRef}
          sx={{display: visionHiddenDetails ? 'none !important' : 'inline-block'}}
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
