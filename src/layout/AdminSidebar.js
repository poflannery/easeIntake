
// MUI imports
import { IconButton } from '@mui/material';
import { Stack } from '@mui/system';
// icon imports
import { IconHelp, IconReport, IconSettings, IconTicket, IconUser, IconUsers } from '@tabler/icons';
// react imports
import React from 'react'
// redux imports
import { useDispatch, useSelector } from 'react-redux';

// router imports
import { useLocation, useNavigate } from 'react-router';
// resource imports
import { HD } from '../images/images';
import { setHome, setReports, setSelectedNavigationAdmin, setTickets, setUsers } from '../redux/adminNavReducer';


export default function Sidebar() {

  const store = useSelector(state => state.adminNavigation)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogoClick = () => {
    dispatch(setHome());
    navigate('/admin/dashboard');
    dispatch(setSelectedNavigationAdmin(1));
  }
  const handleTicketClick = () => {
    dispatch(setTickets());
    navigate('/admin/dashboard');
    dispatch(setSelectedNavigationAdmin(1));
  }  
  const handleUserClick = () => {
    dispatch(setUsers());
    navigate('/admin/users');
    dispatch(setSelectedNavigationAdmin(2));
  }
  const handleReportClick = () => {
    dispatch(setReports());
    navigate('/admin/reports');
    dispatch(setSelectedNavigationAdmin(3));
  }

  // reset selected value on pathname
  if (location.pathname === '/dashboard' || location.pathname === '/dashboard/') {
    dispatch(setSelectedNavigationAdmin(1))
  }
  if (location.pathname === '/dashboard/users' || location.pathname === '/dashboard/users/') {
    dispatch(setSelectedNavigationAdmin(2))
  }
  if (location.pathname === '/dashboard/reports' || location.pathname === '/dashboard/reports/') {
    dispatch(setSelectedNavigationAdmin(3))
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
              <p5 is="custom">Tickets</p5>
          </IconButton>
          <IconButton 
            className={store.selected === 2 ? 'sidebar__nav-button--hover--selected' : 'sidebar__nav-button--hover'} 
            disableRipple onClick={handleUserClick}>
              <IconUsers size='1.5rem' stroke={1}/>
              <p5 is="custom">Users</p5>
          </IconButton>
          <IconButton 
            className={store.selected === 3 ? 'sidebar__nav-button--hover--selected' : 'sidebar__nav-button--hover'} 
            disableRipple onClick={handleReportClick}>
              <IconReport size='1.5rem' stroke={1}/>
              <p5 is="custom">Reports</p5>
          </IconButton>
        </Stack>
      </nav>
      <nav className='css--sidebar__grid-bottom'>
      <Stack direction='column' spacing={0} className='sidebar__nav-list'>
          <IconButton 
            className={store.selected === 2 ? 'sidebar__nav-button--hover--selected' : 'sidebar__nav-button--hover'} 
            disableRipple>
              <IconSettings size='1.5rem' stroke={1}/>
              <p5 is="custom">Settings</p5>
          </IconButton>
          <IconButton 
            className='sidebar__nav-button--nohover'
            disableRipple>
              <IconHelp size='1.5rem' stroke={1}/>
              <p5 is="custom">Help</p5>
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
