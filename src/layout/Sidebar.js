
// MUI imports
import { Button, IconButton, Modal, Tooltip } from '@mui/material';
import { Stack } from '@mui/system';
// icon imports
import { IconArrowLeft, IconBook, IconCalendarEvent, IconFiles,  IconHelp,  IconReport,  IconTicket, IconUser, IconUsers } from '@tabler/icons';
// react imports
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// redux imports

// router imports
import { useNavigate } from 'react-router';
// resource imports
import { HD } from '../images/images';
import { setNewUserGuide } from '../redux/globalReducer';
import { setMySavedNavigation, setNewBuildNavigation, setQueueNavigation, setRenewalNavigation, setResourcesNavigation, setUploadDocsNavigation } from '../redux/navigationReducer';

export default function Sidebar() {

// redux
const dispatch = useDispatch();

// router
const navigate = useNavigate();
const store = useSelector(state => state.navigation)
const storeGlobal = useSelector(state => state.global)
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
const handleClose = () => {
  setOpen(open => !open)
  dispatch(setNewUserGuide())
}
// local states
const [open,setOpen] = useState(false)


// useEffect
useEffect(() => {
  if (storeGlobal.newUserGuide) {
    return
  }
  handleClose()
},[])




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
          <IconButton
          onClick={handleClose}
            className='sidebar__nav-button-tutorial'
            disableRipple >
              <IconHelp size='1.5rem' stroke={1}/>
              <p3 is="custom">Tutorial</p3>
          </IconButton>
        </Stack>
      </nav>
      <Modal
      open={open}
      onClose={handleClose}>
      <div className='modal-instructions'>
        <h1>New User Guide</h1>
        <p>Please read this before using the intake form.</p>
        <p style={{alignSelf: 'flex-start'}}><b>The Ease Intake Form</b> is now centralized to the Ease Hub dashboard. All features will be posted in and on the intake hub or dashboard going forward.<br/> You are presented with new features to discover, but to get you started, please review the following information.</p>
        <p>The <b>Sidebar</b> on the left of your screen is your navigation. please use this to begin a new build or renewal intake. When you are filling out an intake form, remember to <b>save your progress</b> using the save Information buttons on each page.<br/> It is important to not confuse this with the 'Save For Later' button on the side panel.</p>
        <Button variant='outlined' disableRipple> Save For Later </Button>
        <p>This button is to be used to save your full intake and return to it at a later point. Do not use this button to save details for a submission. This button will not submit a valid intake. Save buttons are located on each page of the intake form. </p>
        <Button variant='outlined' disableRipple> Submit Build </Button>
        <p>Your submit build button is to be used to submit the details you entered in on the form or to submit a previously saved and retrieve intake form.</p>
        <p>You will be required to enter information into a few specific fields on each build. If you find yourself unable to enter anything into a required field, please write N/A in order to continue with the submission.</p>
        <p style={{textAlign: 'center'}}>If you need help with any additional tasks, please return to the hub and submit a ticket. You can exit by clicking anywhere else on the screen now.</p>
      </div>
      </Modal>
    </div>
  )
}
