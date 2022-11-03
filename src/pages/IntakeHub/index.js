// MUI Imports
import { Stack } from '@mui/system';
import { Button, Chip, ListItem, MenuItem, TextField } from '@mui/material';

// React Imports
import React from 'react'
import NewBuildSidebar from './SideBar/NewBuildSidebar';
import { useSelector } from 'react-redux';
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


export default function IntakeHub() {

// redux
const store = useSelector(state => state.navigation);
const storeNewBuildList = useSelector(state => state.newBuildList)
const storeRenewalList = useSelector(state => state.renewalList)

  return (
    <div className=' intakeHub__layout grid'>
      <div className='noticeBar__container'>
        <p>Verify tickets have been processed to completion prior to submitting for resolutions. <u>Click here for a procedure overview.</u></p>
      </div>
      <div className='navigation__left grid'>
        <div className='navigation__left__title'>
          <h3>{store.location}</h3>
          { store.location === 'New Build' || store.location === 'Renewal' ? <Button variant='contained' >Submit Build</Button> : ''}
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
              { storeNewBuildList.name === 'Basic Information' ? <BasicInformation /> : 
                storeNewBuildList.name === 'Administrator' ? <Administrator /> :
                storeNewBuildList.name === 'Eligibility' ? <Eligibility /> :
                storeNewBuildList.name === 'CoveragesOne' ? <MedicalDentalVision /> :
                storeNewBuildList.name === 'CoveragesTwo' ? <LIFEADD /> :
                storeNewBuildList.name === 'CoveragesThree' ? <STDLTD /> :
                storeNewBuildList.name === 'CoveragesFour' ? <Financial /> :
                storeNewBuildList.name === 'CoveragesFive' ? <Other /> :
                storeNewBuildList.name === 'Rates' ? <Rates /> :
                storeNewBuildList.name === 'Deadlines' ? <Deadlines /> :
                storeNewBuildList.name === 'Additional' ? <AdditionalNotes /> : null}
            </>
            }
            { store.location === 'Renewal' &&
            <>
              { storeRenewalList.name === 'Basic Information' ? <BasicInformationRenewal /> :
                storeRenewalList.name === 'Administrator' ? <AdministratorRenewal /> :
                storeRenewalList.name === 'Eligibility' ? '' :
                storeRenewalList.name === 'CoveragesOne' ? '' :
                storeRenewalList.name === 'CoveragesTwo' ? '' :
                storeRenewalList.name === 'Rates' ? <RatesRenewal /> :
                storeRenewalList.name === 'Deadlines' ? <DeadlinesRenewal /> :
                storeRenewalList.name === 'Additional' ? <AdditionalNotesRenewal /> : null}
            </>
            }
              </div>
        </div>
    </div>
  )
}
