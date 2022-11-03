
// MUI Imports
import { Button, MenuItem, TextField } from '@mui/material'

// React Imports
import React, { useState } from 'react'

// Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { setNoticeBarText } from '../../../redux/globalReducer';
import { setEligibilityClassesValue, setExtraEligibilityValue, setInterestedPayrollValue, setMinimumHoursValue, setPayrollValue, setTerminationTypeValue, setWaitingPeriodValue } from '../../../redux/NewBuildValuesReducer';

export default function Eligibility() {

// redux
const dispatch = useDispatch();
const store = useSelector(state => state.newBuildValues)


// local states
const [eligibilityClasses,setEligibilityClasses] = useState('')
const [payroll,setPayroll] = useState('')
const [interested,setInterestedPayroll] = useState('')
const [extraEligibility,setExtraEligibility] = useState('')
const [minimumHours,setMinimumHours] = useState('')
const [benefitTermination,setBenefitTermination] = useState('')
const [waitingPeriod,setWaitingPeriod] = useState('')
const [stage,setStage] = useState((minimumHours && benefitTermination && waitingPeriod) ? 1 : 0)
const [error1,setError1] = useState(false)
const [error2,setError2] = useState(false)
const [error3,setError3] = useState(false)
const [submitting,setSubmitting] = useState(false)


// methods
const handleCheckFields = () => {
  minimumHours === '' ? setError1(true) : setError1(false)
  benefitTermination === '' ? setError2(true) : setError2(false)
  waitingPeriod === '' ? setError3(true) : setError3(false)
  if (minimumHours && benefitTermination && waitingPeriod) {
    setStage(1)
  }
};
const handleSaveInformation = () => {
  setSubmitting(true);
  dispatch(setEligibilityClassesValue(eligibilityClasses))
  dispatch(setMinimumHoursValue(minimumHours))
  dispatch(setTerminationTypeValue(benefitTermination))
  dispatch(setWaitingPeriodValue(waitingPeriod))
  dispatch(setPayrollValue(payroll))
  dispatch(setInterestedPayrollValue(interested))
  dispatch(setExtraEligibilityValue(extraEligibility))
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
          <p3 is="custom">Eligibility Classes</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='List Classes'
          onChange={(e) => setEligibilityClasses(e.target.value)}
          defaultValue={store.eligibilityClasses}
          disabled={submitting ? true : false}
          />
          <p3 is="custom">Details</p3>
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          placeholder='Minimum Hours'
          onChange={(e) => setMinimumHours(e.target.value)}
          error={error1}
          helperText={error1 ? 'Must Contain a Value' : ''}
          defaultValue={store.minimumHours}
          disabled={submitting ? true : false}
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          label='Benefit Termination'
          select
          onChange={(e) => setBenefitTermination(e.target.value)}
          error={error2}
          helperText={error2 ? 'Must Contain a Value' : ''}
          defaultValue={store.terminationType}
          disabled={submitting ? true : false}
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
          onChange={(e) => setWaitingPeriod(e.target.value)}
          error={error3}
          helperText={error3 ? 'Must Contain a Value' : ''}
          defaultValue={store.waitingPeriod}
          disabled={submitting ? true : false}
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
          onChange={(e) => setPayroll(e.target.value)}
          defaultValue={store.payroll}
          disabled={submitting ? true : false}
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
          onChange={(e) => setInterestedPayroll(e.target.value)}
          defaultValue={store.interestedPayroll}
          disabled={submitting ? true : false}
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
          onChange={(e) => setExtraEligibility(e.target.value)}
          defaultValue={store.extraEligibility}
          disabled={submitting ? true : false}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}} onClick={stage === 0 ? handleCheckFields : handleSaveInformation}>{stage === 0 ? 'Check Required Fields' : 'Save Information'}</Button> {/* Check Required fields, then save data button appears*/}
    </>
  )
}
