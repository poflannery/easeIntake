import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setNoticeBarText } from '../../../redux/globalReducer';
import {  setDentalChangeDetailsRenewal, setDentalChangeRenewal, setMedicalChangeDetailsRenewal, setMedicalChangeRenewal, setVisionChangeDetailsRenewal, setVisionChangeRenewal } from '../../../redux/renewalValuesReducer';


export default function CoveragesOneRenewal() {


// redux
const dispatch = useDispatch();
const store = useSelector(state => state.renewalValues)
// ref
const medicalRef = useRef();
const dentalRef = useRef();
const visionRef = useRef();
const checkedRef1 = useRef();
const checkedRef2 = useRef();
const checkedRef3 = useRef();

// local states
const [medicalChecked,setMedicalChecked] = useState(store.medicalChange)
const [dentalChecked,setDentalChecked] = useState(store.dentalChange)
const [visionChecked,setVisionChecked] = useState(store.visionChange)
const [medicalHiddenDetails, setMedicalHiddenDetails] = useState(true)
const [dentalHiddenDetails, setDentalHiddenDetails] = useState(true)
const [visionHiddenDetails, setVisionHiddenDetails] = useState(true)
const [medicalDetails, setMedicalDetails] = useState(store.medicalChangeDetails)
const [dentalDetails, setDentalDetails] = useState(store.dentalChangeDetails)
const [visionDetails, setVisionDetails] = useState(store.visionChangeDetails)
const [submitting,setSubmitting] = useState(false)
//methods
const eraseMedicalDetails = () => {
  if (checkedRef1.current.checked === false)
  medicalRef.current.value = ''
}
const eraseDentalDetails = () => {
  if (checkedRef2.current.checked === false)
  dentalRef.current.value = ''
}
const eraseVisionDetails = () => {
  if (checkedRef3.current.checked === false)
  visionRef.current.value = ''
}
const handleSaveInformation = () => {
  setSubmitting(true)
  dispatch(setMedicalChangeDetailsRenewal(medicalDetails))
  dispatch(setDentalChangeDetailsRenewal(dentalDetails))
  dispatch(setVisionChangeDetailsRenewal(visionDetails))
  dispatch(setVisionChangeRenewal(visionChecked))
  dispatch(setDentalChangeRenewal(dentalChecked))
  dispatch(setMedicalChangeRenewal(medicalChecked))
  setTimeout(() => {
    setSubmitting(false)
    savedNotice()
  },1000)
}
const savedNotice = () => {
  dispatch(setNoticeBarText('Information Saved!'));
  setTimeout(() => {
    dispatch(setNoticeBarText('Notifications will appear here when needed. Thank you!'));
  },3000)
}






// return \\
  return (
    <>
          <p3 is="custom">Plan Changes</p3>
          <FormControlLabel className='FormControlLabel' control={<Checkbox size='small' defaultChecked={store.medicalChange} checked={medicalChecked}  inputRef={checkedRef1} onClick={() => setMedicalChecked(!medicalChecked)} onChange={() => {setMedicalHiddenDetails(!medicalHiddenDetails);eraseMedicalDetails()}} />} label='Medical Plan Changes' />
          <TextField
          inputRef={medicalRef}
          sx={{display: medicalChecked ? 'inline-block' : 'none !important'}}
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Medical Change Details Here...include # of plans if changing'
          multiline
          rows={4}
          onChange={(e) => setMedicalDetails(e.target.value)}
          defaultValue={store.medicalChangeDetails}
          disabled={submitting ? true : false}
          />
          <FormControlLabel className='FormControlLabel' control={<Checkbox size='small' defaultChecked={store.dentalChange} checked={dentalChecked}  inputRef={checkedRef2} onClick={() => setDentalChecked(!dentalChecked)} onChange={() => {setDentalHiddenDetails(!dentalHiddenDetails);eraseDentalDetails()}} />} label='Dental Plan Changes' />
          <TextField
          inputRef={dentalRef}
          sx={{display: dentalChecked ? 'inline-block' : 'none !important'}}
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Dental Change Details Here...include # of plans if changing'
          multiline
          rows={4}
          onChange={(e) => setDentalDetails(e.target.value)}
          defaultValue={store.dentalChangeDetails}
          disabled={submitting ? true : false}
          />
          <FormControlLabel className='FormControlLabel' control={<Checkbox size='small' defaultChecked={store.visionChange} checked={visionChecked} inputRef={checkedRef3} onClick={() => setVisionChecked(!visionChecked)} onChange={() => {setVisionHiddenDetails(!visionHiddenDetails);eraseVisionDetails()}} />} label='Vision Plan Changes' />
          <TextField
          inputRef={visionRef}
          sx={{display: visionChecked ? 'inline-block' : 'none !important'}}
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Vision Change Details Here...include # of plans if changing'
          multiline
          rows={4}
          onChange={(e) => setVisionDetails(e.target.value)}
          defaultValue={store.visionChangeDetails}
          disabled={submitting ? true : false}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}} onClick={handleSaveInformation}>Save Information</Button>
    </>
  )
}
