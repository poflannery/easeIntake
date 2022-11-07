import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNoticeBarText } from '../../../redux/globalReducer';
import { setCityRenewal, setFeinRenewal, setGroupNameRenewal, setSicCodeRenewal, setStateRenewal, setWebsiteRenewal, setZipRenewal } from '../../../redux/renewalValuesReducer';

export default function BasicInformationRenewal() {


// redux
const dispatch = useDispatch();
const store = useSelector(state => state.renewalValues)


// local states
const [groupName,setGroupName] = useState(store.groupName)
const [city, setCity] = useState(store.city)
const [state, setState] = useState(store.state)
const [zip, setZip] = useState(store.zip)
const [sicCode, setSicCode] = useState(store.sicCode)
const [fein, setFein] = useState(store.fein)
const [website, setWebsite] = useState(store.website)
const [stage,setStage] = useState((groupName && city && state && sicCode) ? 1 : 0)
const [error1,setError1] = useState(false)
const [error2,setError2] = useState(false)
const [error3,setError3] = useState(false)
const [error4,setError4] = useState(false)
const [submitting,setSubmitting] = useState(false)

const handleCheckFields = () => {
  groupName === '' ? setError1(true) : setError1(false)
  city === '' ? setError2(true) : setError2(false)
  state === '' ? setError3(true) : setError3(false)
  sicCode === '' ? setError4(true) : setError4(false)
  if (groupName && city && state && sicCode) {
    setStage(1)
  }
}
const handleSaveInformation = () => {
  setSubmitting(true);
  dispatch(setGroupNameRenewal(groupName));
  dispatch(setCityRenewal(city));
  dispatch(setStateRenewal(state));
  dispatch(setZipRenewal(zip));
  dispatch(setSicCodeRenewal(sicCode));
  dispatch(setFeinRenewal(fein));
  dispatch(setWebsiteRenewal(website));
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


// return \\
  return (
    <>
          <p3 is="custom">Group Name</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Name...'
          onChange={(e) => setGroupName(e.target.value)}
          error={error1}
          helperText={error1 ? 'Must Contain a Value' : ''}
          defaultValue={store.groupName}
          disabled={submitting ? true : false}
          />
          <p3 is="custom">City</p3>
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          placeholder='City...'
          onChange={(e) => setCity(e.target.value)}
          error={error2}
          helperText={error2 ? 'Must Contain a Value' : ''}
          defaultValue={store.city}
          disabled={submitting ? true : false}
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          placeholder='State...'
          onChange={(e) => setState(e.target.value)}
          error={error3}
          helperText={error3 ? 'Must Contain a Value' : ''}
          defaultValue={store.state}
          disabled={submitting ? true : false}
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          placeholder='Zip Code...'
          onChange={(e) => setZip(e.target.value)}
          defaultValue={store.zip}
          disabled={submitting ? true : false}
          />
          </div>
          <p3 is="custom">Data Entry</p3>
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          placeholder='SIC Code...'
          onChange={(e) => setSicCode(e.target.value)}
          error={error4}
          helperText={error4 ? 'Must Contain a Value' : ''}
          defaultValue={store.sicCode}
          disabled={submitting ? true : false}
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          placeholder='Federal Tax ID...'
          onChange={(e) => setFein(e.target.value)}
          defaultValue={store.fein}
          disabled={submitting ? true : false}
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          placeholder='Website...'
          onChange={(e) => setWebsite(e.target.value)}
          defaultValue={store.website}
          disabled={submitting ? true : false}
          />
          </div>
          <Button variant='contained' sx={{marginTop: '1rem'}} onClick={stage === 0 ? handleCheckFields : handleSaveInformation}>{stage === 0 ? 'Check Required Fields' : 'Save Information'}</Button> {/* Check Required fields, then save data button appears*/}
    </>
  )
}
