
// MUI imports
import { IconButton, Tooltip } from '@mui/material';
import { Stack } from '@mui/system';
// icon imports
import { IconArrowLeft, IconBook, IconCalendarEvent, IconFiles,  IconReport,  IconTicket, IconUser, IconUsers } from '@tabler/icons';
// react imports
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// redux imports

// router imports
import { useNavigate } from 'react-router';
// resource imports
import { HD } from '../images/images';
import { setMySavedNavigation, setNewBuildNavigation, setQueueNavigation, setRenewalNavigation, setResourcesNavigation, setUploadDocsNavigation } from '../redux/navigationReducer';

export default function Sidebar() {

// redux
const dispatch = useDispatch();

// router
const navigate = useNavigate();
const store = useSelector(state => state.navigation)

// methods
const handleClickNewBuild = () => {
dispatch(setNewBuildNavigation())
}
const handleClickRenewal = () => {
dispatch(setRenewalNavigation())  
}
const handleClickMySaved = () => {
dispatch(setMySavedNavigation())  
}
const handleClickResources = () => {
dispatch(setResourcesNavigation())  
}
const handleClickQueue = () => {
dispatch(setQueueNavigation())  
}
const handleClickUploadDocs = () => {
dispatch(setUploadDocsNavigation())  
}




  // return //
  return (
    <div className='sidebar__grid'>
      <nav className='css--sidebar__grid-top'>
        <Stack direction='column' spacing={0} className='sidebar__nav-list'>
          <IconButton 
            className='sidebar__nav-button--logo' 
            disableRipple >
              <img src={HD} alt='logo' />
          </IconButton>
          <IconButton 
            onClick={handleClickNewBuild}
            className={store.location === 'New Build' ? ' sidebar__nav-button--hover--selected' : 'sidebar__nav-button--hover'}
            disableRipple >
              <IconTicket size='1.5rem' stroke={1}/>
              <p3 is="custom">New Build</p3>
          </IconButton>
          <IconButton 
            onClick={handleClickRenewal}
            className={store.location === 'Renewal' ? ' sidebar__nav-button--hover--selected' : 'sidebar__nav-button--hover'}
            disableRipple >
              <IconUsers size='1.5rem' stroke={1}/>
              <p3 is="custom">Renewal</p3>
          </IconButton>
          <IconButton 
            onClick={handleClickMySaved}
            className={store.location === 'My Saved' ? ' sidebar__nav-button--hover--selected' : 'sidebar__nav-button--hover'}
            disableRipple>
              <IconReport size='1.5rem' stroke={1}/>
              <p3 is="custom">My Saved</p3>
          </IconButton>
          <IconButton 
            onClick={handleClickResources}
            className={store.location === 'Resources' ? ' sidebar__nav-button--hover--selected' : 'sidebar__nav-button--hover'}
            disableRipple >
              <IconBook size='1.5rem' stroke={1}/>
              <p3 is="custom">Resources</p3>
          </IconButton>
          <IconButton 
            onClick={handleClickQueue}
            className={store.location === 'Queue' ? ' sidebar__nav-button--hover--selected' : 'sidebar__nav-button--hover'}
            disableRipple >
              <IconCalendarEvent size='1.5rem' stroke={1}/>
              <p3 is="custom">Queue</p3>
          </IconButton>
          <IconButton 
            onClick={handleClickUploadDocs}
            className={store.location === 'Upload Docs' ? ' sidebar__nav-button--hover--selected' : 'sidebar__nav-button--hover'}
            disableRipple >
              <IconFiles size='1.5rem' stroke={1}/>
              <p3 is="custom">Upload Docs</p3>
          </IconButton>
        </Stack>
      </nav>
      <nav className='css--sidebar__grid-bottom'>
      <Stack direction='column' spacing={0} className='sidebar__nav-list'>
          <IconButton 
            className='sidebar__nav-button--nohover'
            disableRipple
            onClick={() => navigate('/')}
            >
              <IconArrowLeft size='1.5rem' stroke={1}/>
              <p3 is="custom">Return to Homepage</p3>
          </IconButton>
          <Tooltip title='Account Features are currently disabled.' placement='right'>
            <IconButton 
              className='sidebar__nav-button--nohover-last sidebar__nav-button--nohover'
              disableRipple>
                <div className='sidebar__nav-button--nohover-last--circle'>
                  <IconUser stroke={1}/>
                </div>
            </IconButton>
          </Tooltip>
        </Stack>
      </nav>
    </div>
  )
}
