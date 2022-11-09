// MUI Imports
import { Button} from '@mui/material';

// React Imports
import React, { useState } from 'react'

// Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { setNoticeBarText } from '../../redux/globalReducer';

// Firebase Imports
import { collection } from 'firebase/firestore';
import { db } from '../../firebase/config'
import { useFirestoreCollectionMutation } from '@react-query-firebase/firestore';


//Component Imports
import NewBuildSidebar from './SideBar/NewBuildSidebar';
import RenewalSidebar from './SideBar/RenewalSidebar';
import BasicInformation from './NewBuildData/BasicInformation';
import Administrator from './NewBuildData/Administrator';
import MySavedSidebar from './SideBar/MySavedSidebar';
import ResourcesSidebar from './SideBar/ResourcesSidebar';
import QueueSidebar from './SideBar/QueueSidebar';
import UploadDocsSidebar from './SideBar/UploadDocsSidebar';
import Eligibility from './NewBuildData/Eligibility';
import AdditionalNotes from './NewBuildData/AdditionalNotes';
import Deadlines from './NewBuildData/Deadlines';
import Rates from './NewBuildData/Rates';
import Other from './NewBuildData/Other';
import Financial from './NewBuildData/Financial';
import STDLTD from './NewBuildData/STDLTD';
import MedicalDentalVision from './NewBuildData/MedicalDentalVision';
import LIFEADD from './NewBuildData/LIFEADD';
import BasicInformationRenewal from './RenewalData/BasicInformation';
import AdministratorRenewal from './RenewalData/Administrator';
import RatesRenewal from './RenewalData/Rates';
import DeadlinesRenewal from './RenewalData/Deadlines';
import AdditionalNotesRenewal from './RenewalData/AdditionalNotes';
import EligibilityRenewal from './RenewalData/Eligibility';
import CoveragesOneRenewal from './RenewalData/CoveragesOne';
import CoveragesTwoRenewal from './RenewalData/CoveragesTwo';
import Queue from './QueueData/Queue';
import UploadDocs from './UploadDocsData/UploadDocs';
import MySaved from './MySavedData/MySaved';
import Downloads from './ResourcesData/Downloads';
import { useNavigate } from 'react-router';



export default function IntakeHub() {

// local states
const [saveButtonText,setSaveButtonText] = useState('Save For Later')
const [submitButtonText,setSubmitButtonText] = useState('Submit Build')
const [disabledSave,setDisabledSave] = useState(false)
const [disabledSubmit,setDisabledSubmit] = useState(false)


// router
const navigate = useNavigate();

// redux
const store = useSelector(state => state.navigation);
const storeValues = useSelector(state => state.newBuildValues)
const storeRenewals = useSelector(state => state.renewalValues)
const storeGlobal = useSelector(state => state.global)
const dispatch = useDispatch();
const globalStore = useSelector(state => state.global)
const storenewBuildSidebar = useSelector(state => state.newBuildSidebar)
const storerenewalSidebar = useSelector(state => state.renewalSidebar)


// Firebase
const submitted = collection(db, 'submitted');
const addSubmitted = useFirestoreCollectionMutation(submitted);

const queue = collection(db,'queue');
const addQueue = useFirestoreCollectionMutation(queue)

const saved = collection(db,`saved/_/${storeGlobal.user}`);
const addSaved = useFirestoreCollectionMutation(saved)

// methods
const handleSubmit = () => {

if (storeValues.groupName &&
    storeValues.city &&
    storeValues.state &&
    storeValues.sicCode &&
    storeValues.minimumHours &&
    storeValues.terminationType &&
    storeValues.waitingPeriod &&
    storeValues.medicalPlanNumber &&
    storeValues.medicalPlanCarriers &&
    storeValues.dentalPlanNumber &&
    storeValues.dentalPlanCarriers &&
    storeValues.visionPlanNumber &&
    storeValues.visionPlanCarriers &&
    storeValues.basicLifePlanNumber &&
    storeValues.volLifePlanNumber &&
    storeValues.stdPlanNumber &&
    storeValues.ltdPlanNumber &&
    storeValues.financialPlanNumber &&
    storeValues.otherPlanNumber &&
    storeValues.buildDeadline &&
    storeValues.openEnrollment &&
    storeValues.allOtherDetails) { 
      setDisabledSubmit(true)
      setSubmitButtonText('Please Wait...')
      addSubmitted.mutateAsync({
        type: 'New Build',
        groupName: storeValues.groupName,
        city: storeValues.city,
        state: storeValues.state,
        zip: storeValues.zip,
        sicCode: storeValues.sicCode,
        fein: storeValues.fein,
        website: storeValues.website,
        adminName: storeValues.adminName,
        adminEmail: storeValues.adminEmail,
        eligibilityClasses: storeValues.eligibilityClasses,
        minimumHours: storeValues.minimumHours,
        terminationType: storeValues.terminationType,
        waitingPeriod: storeValues.waitingPeriod,
        payroll: storeValues.payroll,
        interestedPayroll: storeValues.interestedPayroll,
        extraEligibility: storeValues.extraEligibility,
        medicalPlanNumber: storeValues.medicalPlanNumber,
        medicalPlanCarriers: storeValues.medicalPlanCarriers,
        medicalDetails: storeValues.medicalDetails,
        dentalPlanNumber: storeValues.dentalPlanNumber,
        dentalPlanCarriers: storeValues.dentalPlanCarriers,
        dentalDetails: storeValues.dentalDetails,
        visionPlanNumber: storeValues.visionPlanNumber,
        visionPlanCarriers: storeValues.visionPlanCarriers,
        visionDetails: storeValues.visionDetails,
        basicLifePlanNumber: storeValues.basicLifePlanNumber,
        basicLifePlanCarriers: storeValues.basicLifePlanCarriers,
        basicLifeDetails: storeValues.basicLifeDetails,
        volLifePlanNumber: storeValues.volLifePlanNumber,
        volLifePlanCarriers: storeValues.volLifePlanCarriers,
        volLifeDetails: storeValues.volLifeDetails,
        stdPlanNumber: storeValues.stdPlanNumber,
        stdPlanCarriers: storeValues.stdPlanCarriers,
        stdDetails: storeValues.stdDetails,
        ltdPlanNumber: storeValues.ltdPlanNumber,
        ltdPlanCarriers: storeValues.ltdPlanCarriers,
        ltdDetails: storeValues.ltdDetails,
        additionalLifeDetails: storeValues.additionalLifeDetails,
        financialPlanNumber: storeValues.financialPlanNumber,
        financialPlanCarriers: storeValues.financialPlanCarriers,
        financialDetails: storeValues.financialDetails,
        otherPlanNumber: storeValues.otherPlanNumber,
        otherPlanCarriers: storeValues.otherPlanCarriers,
        otherDetails: storeValues.otherDetails,
        rates: storeValues.rates,
        buildDeadline: storeValues.buildDeadline,
        openEnrollment: storeValues.openEnrollment,
        allOtherDetails: storeValues.allOtherDetails
      }).then(() => {
      addQueue.mutate({
          groupName: storeValues.groupName,
          submitted: new Date().toLocaleString(),
          status: 'Submitted - Pending Review'
        })
      });
      setTimeout(() =>{
        navigate('/success', {state: {type: 'Submission', message: 'Congratulations! You have successfully submitted your intake form. You can review your build status in the live queue.'}})
    },1000)
    } 
    else {
      // execute notice of required fields
      dispatch(setNoticeBarText('Please recheck for required fields! Each field must be filled if required.'))
    }
}
const handleSave = () => {
  if (storeValues.groupName) {
    handleSubmitSaved()
  }
  else {
    dispatch(setNoticeBarText('Enter a Group Name First.'))
  }
}


const handleSubmitSaved = () => {
  setSaveButtonText('Please Wait...')
  setDisabledSave(true)
  addSaved.mutate({
        type: 'New Build',
        groupName: storeValues.groupName,
        city: storeValues.city,
        state: storeValues.state,
        zip: storeValues.zip,
        sicCode: storeValues.sicCode,
        fein: storeValues.fein,
        website: storeValues.website,
        adminName: storeValues.adminName,
        adminEmail: storeValues.adminEmail,
        eligibilityClasses: storeValues.eligibilityClasses,
        minimumHours: storeValues.minimumHours,
        terminationType: storeValues.terminationType,
        waitingPeriod: storeValues.waitingPeriod,
        payroll: storeValues.payroll,
        interestedPayroll: storeValues.interestedPayroll,
        extraEligibility: storeValues.extraEligibility,
        medicalPlanNumber: storeValues.medicalPlanNumber,
        medicalPlanCarriers: storeValues.medicalPlanCarriers,
        medicalDetails: storeValues.medicalDetails,
        dentalPlanNumber: storeValues.dentalPlanNumber,
        dentalPlanCarriers: storeValues.dentalPlanCarriers,
        dentalDetails: storeValues.dentalDetails,
        visionPlanNumber: storeValues.visionPlanNumber,
        visionPlanCarriers: storeValues.visionPlanCarriers,
        visionDetails: storeValues.visionDetails,
        basicLifePlanNumber: storeValues.basicLifePlanNumber,
        basicLifePlanCarriers: storeValues.basicLifePlanCarriers,
        basicLifeDetails: storeValues.basicLifeDetails,
        volLifePlanNumber: storeValues.volLifePlanNumber,
        volLifePlanCarriers: storeValues.volLifePlanCarriers,
        volLifeDetails: storeValues.volLifeDetails,
        stdPlanNumber: storeValues.stdPlanNumber,
        stdPlanCarriers: storeValues.stdPlanCarriers,
        stdDetails: storeValues.stdDetails,
        ltdPlanNumber: storeValues.ltdPlanNumber,
        ltdPlanCarriers: storeValues.ltdPlanCarriers,
        ltdDetails: storeValues.ltdDetails,
        additionalLifeDetails: storeValues.additionalLifeDetails,
        financialPlanNumber: storeValues.financialPlanNumber,
        financialPlanCarriers: storeValues.financialPlanCarriers,
        financialDetails: storeValues.financialDetails,
        otherPlanNumber: storeValues.otherPlanNumber,
        otherPlanCarriers: storeValues.otherPlanCarriers,
        otherDetails: storeValues.otherDetails,
        rates: storeValues.rates,
        buildDeadline: storeValues.buildDeadline,
        openEnrollment: storeValues.openEnrollment,
        allOtherDetails: storeValues.allOtherDetails
  })
  setTimeout(() =>{
    navigate('/success', {state: {type: 'Save', message: 'Congratulations! You have successfully saved your intake form. If you wish to return to the saved intake, go to My Saved in the Ease Hub.'}})
  },1000)
}

const handleSaveRenewal = () => {
  if (storeRenewals.groupName) {
    handleSubmitSavedRenewal()
  }
  else {
    dispatch(setNoticeBarText('Enter a Group Name First.'))
  }
}

const handleSubmitSavedRenewal = () => {
  setSaveButtonText('Please Wait...')
  setDisabledSave(true)
  addSaved.mutate({
        type: 'Renewal',
        groupName: storeRenewals.groupName,
        city: storeRenewals.city,
        state: storeRenewals.state,
        zip: storeRenewals.zip,
        sicCode: storeRenewals.sicCode,
        fein: storeRenewals.fein,
        website: storeRenewals.website,
        adminName: storeRenewals.adminName,
        adminEmail: storeRenewals.adminEmail,
        eligibilityClasses: storeRenewals.eligbilityChangeDetails,
        medicalPlanChanges: storeRenewals.medicalChange,
        medicalDetails: storeRenewals.medicalChangeDetails,
        dentalPlanCarriers: storeRenewals.dentalChange,
        dentalDetails: storeRenewals.dentalChangeDetails,
        visionPlanCarriers: storeRenewals.visionChange,
        visionDetails: storeRenewals.visionChangeDetails,
        otherPlanChanges: storeRenewals.otherPlanChange,
        OtherPlanChangeDetails: storeRenewals.otherChangeDetails,
        rateChangeDetails: storeRenewals.rateChangeDetails,
        buildDeadline: storeRenewals.buildDeadline,
        enrollmentDates: storeRenewals.enrollmentDates,
        additionalNotes: storeRenewals.additionalNotes
  })
  setTimeout(() =>{
    navigate('/success', {state: {type: 'Save', message: 'Congratulations! You have successfully saved your intake form. If you wish to return to the saved intake, go to My Saved in the Ease Hub.'}})
  },1000)
}



const handleSubmitRenewal = () => {
  
if (storeRenewals.groupName &&
  storeRenewals.city &&
  storeRenewals.state &&
  storeRenewals.sicCode &&
  storeRenewals.buildDeadline &&
  storeRenewals.enrollmentDates &&
  storeRenewals.additionalNotes) { 
    setDisabledSubmit(true)
    setSubmitButtonText('Please Wait...')
    addSubmitted.mutateAsync({
      type: 'Renewal',
      groupName: storeRenewals.groupName,
      city: storeRenewals.city,
      state: storeRenewals.state,
      zip: storeRenewals.zip,
      sicCode: storeRenewals.sicCode,
      fein: storeRenewals.fein,
      website: storeRenewals.website,
      adminName: storeRenewals.adminName,
      adminEmail: storeRenewals.adminEmail,
      eligibilityClasses: storeRenewals.eligbilityChangeDetails,
      medicalPlanChanges: storeRenewals.medicalChange,
      medicalDetails: storeRenewals.medicalChangeDetails,
      dentalPlanCarriers: storeRenewals.dentalChange,
      dentalDetails: storeRenewals.dentalChangeDetails,
      visionPlanCarriers: storeRenewals.visionChange,
      visionDetails: storeRenewals.visionChangeDetails,
      otherPlanChanges: storeRenewals.otherPlanChange,
      OtherPlanChangeDetails: storeRenewals.otherChangeDetails,
      rateChangeDetails: storeRenewals.rateChangeDetails,
      buildDeadline: storeRenewals.buildDeadline,
      enrollmentDates: storeRenewals.enrollmentDates,
      additionalNotes: storeRenewals.additionalNotes
    }).then(() => {
    addQueue.mutate({
        type: 'Renewal',
        groupName: storeRenewals.groupName,
        submitted: new Date().toLocaleString(),
        status: 'Submitted - Pending Review'
      })
    }).catch(error => console.log(error));
    setTimeout(() =>{
      navigate('/success', {state: {type: 'Submission', message: 'Congratulations! You have successfully submitted your intake form. You can review your build status in the live queue.'}})
  },1000)
  } 
  else {
    // execute notice of required fields
    dispatch(setNoticeBarText('Please recheck for required fields! Each field must be filled if required.'))
  }
}

  return (
    <div className=' intakeHub__layout grid'>
      <div className='noticeBar__container'>
        <p>{globalStore.text}</p>
      </div>
      <div className='navigation__left grid'>
        <div className='navigation__left__title'>
          { store.location === 'New Build' ? <Button variant='outlined' disabled={disabledSave} onClick={handleSave}>{saveButtonText}</Button> : ''}
          { store.location === 'New Build' ? <Button variant='outlined' disabled={disabledSubmit} onClick={handleSubmit}>{submitButtonText}</Button> : ''}
          { store.location === 'Renewal' ? <Button variant='outlined' disabled={disabledSave} onClick={handleSaveRenewal}>{saveButtonText}</Button> : ''}
          { store.location === 'Renewal' ? <Button variant='outlined' disabled={disabledSubmit} onClick={handleSubmitRenewal}>{submitButtonText}</Button> : ''}
        </div>
        <div className='navigation__left__content'>
            { store.location === 'New Build' ? <NewBuildSidebar /> : 
              store.location === 'Renewal' ? <RenewalSidebar /> :
              store.location === 'My Saved' ? <MySavedSidebar /> : 
              store.location === 'Resources' ? <ResourcesSidebar /> : 
              store.location === 'Queue' ? <QueueSidebar /> :
              store.location === 'Upload Docs' ? <UploadDocsSidebar /> : null } 
        </div>
      </div>
      <div className='mainContent__Intake__layout grid'>
          <div className='mainContent__container'>
            { store.location === 'New Build' &&
            <>
              { storenewBuildSidebar.name === 'Basic Information' ? <BasicInformation /> : 
                storenewBuildSidebar.name === 'Administrator' ? <Administrator /> :
                storenewBuildSidebar.name === 'Eligibility' ? <Eligibility /> :
                storenewBuildSidebar.name === 'CoveragesOne' ? <MedicalDentalVision /> :
                storenewBuildSidebar.name === 'CoveragesTwo' ? <LIFEADD /> :
                storenewBuildSidebar.name === 'CoveragesThree' ? <STDLTD /> :
                storenewBuildSidebar.name === 'CoveragesFour' ? <Financial /> :
                storenewBuildSidebar.name === 'CoveragesFive' ? <Other /> :
                storenewBuildSidebar.name === 'Rates' ? <Rates /> :
                storenewBuildSidebar.name === 'Deadlines' ? <Deadlines /> :
                storenewBuildSidebar.name === 'Additional' ? <AdditionalNotes /> : null}
            </>
            }
            { store.location === 'Renewal' &&
            <>
              { storerenewalSidebar.name === 'Basic Information' ? <BasicInformationRenewal /> :
                storerenewalSidebar.name === 'Administrator' ? <AdministratorRenewal /> :
                storerenewalSidebar.name === 'Eligibility' ? <EligibilityRenewal /> :
                storerenewalSidebar.name === 'CoveragesOne' ? <CoveragesOneRenewal /> :
                storerenewalSidebar.name === 'CoveragesTwo' ? <CoveragesTwoRenewal /> :
                storerenewalSidebar.name === 'Rates' ? <RatesRenewal /> :
                storerenewalSidebar.name === 'Deadlines' ? <DeadlinesRenewal /> :
                storerenewalSidebar.name === 'Additional' ? <AdditionalNotesRenewal /> : null }
            </>
            }
            { store.location === 'My Saved' &&
            <>
              <MySaved />
            </>
            }
            { store.location === 'Resources' &&
            <>
              <Downloads />
            </>
            }
            { store.location === 'Queue' &&
            <>
              <Queue />
            </>
            }
            { store.location === 'Upload Docs' &&
            <>
              <UploadDocs />
            </>
            }
              </div>
        </div>
    </div>
  )
}
