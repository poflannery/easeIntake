// MUI Imports
import { Stack } from '@mui/system';
import { Button, Chip, ListItem, MenuItem, TextField } from '@mui/material';

// React Imports
import React from 'react'
import NewBuildSidebar from './SideBar/NewBuildSidebar';
import { useSelector } from 'react-redux';
import RenewalSidebar from './SideBar/RenewalSidebar';
import BasicInformation from './NewBuildData/BasicInformation';


export default function IntakeHub() {

// redux
const store = useSelector(state => state.navigation);


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
              store.location === 'Renewal' ? <RenewalSidebar /> : null } 
        </div>
      </div>
      <div className='mainContent__Intake__layout grid'>
          <div className='mainContent__container'>
            <BasicInformation />
          </div>
        </div>
    </div>
  )
}
