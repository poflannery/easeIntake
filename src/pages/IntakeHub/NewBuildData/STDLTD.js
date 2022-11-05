import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNoticeBarText } from '../../../redux/globalReducer'
import { setAdditionalLifeValue, setLtdCarrierValue, setLtdDetailValue, setLtdNumberValue, setStdCarrierValue, setStdDetailValue, setStdNumberValue } from '../../../redux/NewBuildValuesReducer'

export default function STDLTD() {

// redux
const dispatch = useDispatch()
const store = useSelector(state => state.newBuildValues)

// local states
const [stdNumber,setStdNumber] = useState(store.stdPlanNumber)
const [stdCarrier,setStdCarrier] = useState(store.stdPlanCarriers)
const [stdDetails,setStdDetails] = useState(store.stdDetails)
const [ltdNumber,setLtdNumber] = useState(store.ltdPlanNumber)
const [ltdCarrier,setLtdCarrier] = useState(store.ltdPlanCarriers)
const [ltdDetails,setLtdDetails] = useState(store.ltdDetails)
const [additional,setAdditional] = useState(store.additionalLifeDetails)
const [error1,setError1] = useState(false)
const [error2,setError2] = useState(false)
const [stage,setStage] = useState((stdNumber && ltdNumber) ? 1 : 0)
const [submitting,setSubmitting] = useState(false)

// methods
const handleCheckFields = () => {
  stdNumber === '' ? setError1(true) : setError1(false)
  ltdNumber === '' ? setError2(true) : setError2(false)
  if (stdNumber && ltdNumber) {
    setStage(1)
  }
}
const handleSaveInformation = () => {
  setSubmitting(true);
  dispatch(setStdNumberValue(stdNumber));
  dispatch(setStdCarrierValue(stdCarrier));
  dispatch(setStdDetailValue(stdDetails));
  dispatch(setLtdNumberValue(ltdNumber));
  dispatch(setLtdCarrierValue(ltdCarrier));
  dispatch(setLtdDetailValue(ltdDetails));
  dispatch(setAdditionalLifeValue(additional));
  setTimeout(() => {
    console.log(store)
    setSubmitting(false)
    savedNotice()
  },1000);
}
const savedNotice = () => {
  dispatch(setNoticeBarText('Information Saved!'));
  setTimeout(() => {
    dispatch(setNoticeBarText('Notifications will appear here when needed. Thank you!'));
  },3000)
}


  return (
    <>
          <p3 is="custom">Short Term Disability</p3>
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          placeholder='Number of Plans...'
          onChange={(e) => setStdNumber(e.target.value)}
          error={error1}
          helperText={error1 ? 'Must Contain a Value' : ''}
          defaultValue={store.stdPlanNumber}
          disabled={submitting ? true : false}
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          placeholder='Carriers...'
          onChange={(e) => setStdCarrier(e.target.value)}
          defaultValue={store.stdPlanCarriers}
          disabled={submitting ? true : false}
          />
          </div>
          <p3 is="custom">Additional STD Details</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Describe additional details about the plans or unique circumstances...'
          multiline
          rows={2}
          onChange={(e) => setStdDetails(e.target.value)}
          defaultValue={store.stdDetails}
          disabled={submitting ? true : false}
          />
          <p3 is="custom">Long Term Disability</p3>
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          placeholder='Number of Plans...'
          onChange={(e) => setLtdNumber(e.target.value)}
          error={error2}
          helperText={error2 ? 'Must Contain a Value' : ''}
          defaultValue={store.ltdPlanNumber}
          disabled={submitting ? true : false}
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          placeholder='Carriers...'
          onChange={(e) => setLtdCarrier(e.target.value)}
          defaultValue={store.ltdPlanCarriers}
          disabled={submitting ? true : false}
          />
          </div>
          <p3 is="custom">Additional LTD Details</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Describe additional details about the plans or unique circumstances...'
          multiline
          rows={2}
          onChange={(e) => setLtdDetails(e.target.value)}
          defaultValue={store.ltdDetails}
          disabled={submitting ? true : false}
          />
          <p3 is="custom">If additional plans are included, add them here.</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Describe additional details about the plans or unique circumstances...'
          multiline
          rows={4}
          onChange={(e) => setAdditional(e.target.value)}
          defaultValue={store.additionalLifeDetails}
          disabled={submitting ? true : false}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}} onClick={stage === 0 ? handleCheckFields : handleSaveInformation}>{stage === 0 ? 'Check Required Fields' : 'Save Information'}</Button> {/* Check Required fields, then save data button appears*/}
    </>
  )
}
