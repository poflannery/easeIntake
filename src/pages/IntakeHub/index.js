// MUI Imports
import { Button } from '@mui/material';

// React Imports
import React from 'react'

// Redux Imports
import { useSelector } from 'react-redux';

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
import MySaved from './UploadDocsData/UploadDocs';
import Queue from './QueueData/Queue';
import UploadDocs from './UploadDocsData/UploadDocs';
import Procedures from './ResourcesData/Procedures';
import CarrierConnectionsGuides from './ResourcesData/CarrierConnectionsGuides';
import HelpfulPackets from './ResourcesData/HelpfulPackets';
import Downloads from './ResourcesData/Downloads';
import Payroll from './ResourcesData/Payroll';
import OtherResources from './ResourcesData/Other';


export default function IntakeHub() {

// redux
const store = useSelector(state => state.navigation);
const globalStore = useSelector(state => state.global)
const storeNewBuildList = useSelector(state => state.newBuildList)
const storeRenewalList = useSelector(state => state.renewalList)
const storeResourceList = useSelector(state => state.resources)

  return (
    <div className=' intakeHub__layout grid'>
      <div className='noticeBar__container'>
        <p>{globalStore.text}</p>
      </div>
      <div className='navigation__left grid'>
        <div className='navigation__left__title'>
          { store.location === 'New Build' || store.location === 'Renewal' ? <Button variant='outlined'>Save Build</Button> : ''}
          { store.location === 'New Build' || store.location === 'Renewal' ? <Button variant='outlined' >Submit Build</Button> : ''}
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
                storeRenewalList.name === 'Eligibility' ? <EligibilityRenewal /> :
                storeRenewalList.name === 'CoveragesOne' ? <CoveragesOneRenewal /> :
                storeRenewalList.name === 'CoveragesTwo' ? <CoveragesTwoRenewal /> :
                storeRenewalList.name === 'Rates' ? <RatesRenewal /> :
                storeRenewalList.name === 'Deadlines' ? <DeadlinesRenewal /> :
                storeRenewalList.name === 'Additional' ? <AdditionalNotesRenewal /> : null }
            </>
            }
            { store.location === 'My Saved' &&
            <>
              <MySaved />
            </>
            }
            { store.location === 'Resources' &&
            <>
              { storeResourceList.name === 'Procedures' ? <Procedures /> :
                storeResourceList.name === 'Carrier Connections Guides' ? <CarrierConnectionsGuides /> :
                storeResourceList.name === 'Helpful Packets' ? <HelpfulPackets /> :
                storeResourceList.name === 'Downloads' ? <Downloads /> :
                storeResourceList.name === 'Payroll' ? <Payroll /> :
                storeResourceList.name === 'Other' ? <OtherResources /> : null }
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
