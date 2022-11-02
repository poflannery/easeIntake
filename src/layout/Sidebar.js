
// MUI imports
import { IconButton } from '@mui/material';
import { Stack } from '@mui/system';
// icon imports
import { IconArrowLeft, IconBook, IconCalendarEvent, IconFiles, IconHelp, IconReport, IconSettings, IconTicket, IconUser, IconUsers } from '@tabler/icons';
// react imports
import React from 'react'
// redux imports
import { useDispatch, useSelector } from 'react-redux';
import { setHome, setReports, setSelectedNavigation, setTickets, setUsers } from '../redux/navigationReducer';
// router imports
import { useLocation, useNavigate } from 'react-router';
// resource imports
import { HD } from '../images/images';

export default function Sidebar() {

  const store = useSelector(state => state.navigation)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogoClick = () => {
    dispatch(setHome());
    navigate('/dashboard');
    dispatch(setSelectedNavigation(1));
  }
  const handleTicketClick = () => {
    dispatch(setTickets());
    navigate('/dashboard');
    dispatch(setSelectedNavigation(1));
  }  
  const handleUserClick = () => {
    dispatch(setUsers());
    navigate('/dashboard/users');
    dispatch(setSelectedNavigation(2));
  }
  const handleReportClick = () => {
    dispatch(setReports());
    navigate('/dashboard/reports');
    dispatch(setSelectedNavigation(3));
  }

  // reset selected value on pathname
  if (location.pathname === '/dashboard' || location.pathname === '/dashboard/') {
    dispatch(setSelectedNavigation(1))
  }
  if (location.pathname === '/dashboard/users' || location.pathname === '/dashboard/users/') {
    dispatch(setSelectedNavigation(2))
  }
  if (location.pathname === '/dashboard/reports' || location.pathname === '/dashboard/reports/') {
    dispatch(setSelectedNavigation(3))
  }





  // return //
  return (
    <div className='sidebar__grid'>
      <nav className='css--sidebar__grid-top'>
        <Stack direction='column' spacing={0} className='sidebar__nav-list'>
          <IconButton 
            className='sidebar__nav-button--logo' 
            disableRipple onClick={handleLogoClick}>
              <img src={HD} alt='logo' />
          </IconButton>
          <IconButton 
            className={store.selected === 1 ? 'sidebar__nav-button--hover--selected' : 'sidebar__nav-button--hover'} 
            disableRipple onClick={handleTicketClick}>
              <IconTicket size='1.5rem' stroke={1}/>
              <p3 is="custom">New Build</p3>
          </IconButton>
          <IconButton 
            className={store.selected === 2 ? 'sidebar__nav-button--hover--selected' : 'sidebar__nav-button--hover'} 
            disableRipple onClick={handleUserClick}>
              <IconUsers size='1.5rem' stroke={1}/>
              <p3 is="custom">Renewal</p3>
          </IconButton>
          <IconButton 
            className={store.selected === 3 ? 'sidebar__nav-button--hover--selected' : 'sidebar__nav-button--hover'} 
            disableRipple onClick={handleReportClick}>
              <IconReport size='1.5rem' stroke={1}/>
              <p3 is="custom">My Saved</p3>
          </IconButton>
          <IconButton 
            className={store.selected === 3 ? 'sidebar__nav-button--hover--selected' : 'sidebar__nav-button--hover'} 
            disableRipple onClick={handleReportClick}>
              <IconBook size='1.5rem' stroke={1}/>
              <p3 is="custom">Resources</p3>
          </IconButton>
          <IconButton 
            className={store.selected === 3 ? 'sidebar__nav-button--hover--selected' : 'sidebar__nav-button--hover'} 
            disableRipple onClick={handleReportClick}>
              <IconCalendarEvent size='1.5rem' stroke={1}/>
              <p3 is="custom">Queue</p3>
          </IconButton>
          <IconButton 
            className={store.selected === 3 ? 'sidebar__nav-button--hover--selected' : 'sidebar__nav-button--hover'} 
            disableRipple onClick={handleReportClick}>
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
          <IconButton 
            className='sidebar__nav-button--nohover-last sidebar__nav-button--nohover'
            disableRipple>
              <div className='sidebar__nav-button--nohover-last--circle'>
                <IconUser stroke={1}/>
              </div>
          </IconButton>
        </Stack>
      </nav>
    </div>
  )
}
