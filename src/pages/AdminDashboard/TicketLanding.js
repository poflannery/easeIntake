import { Button, Chip, InputAdornment, ListItem, Stack, TableHead, TableRow, TextField } from '@mui/material';
import { IconInfoCircle, IconSearch } from '@tabler/icons';
import React from 'react';
import '../../sass/ComponentPages/TicketsLanding.scss';





export default function TicketLanding() {




// return \\   
  return (
    <div className='ticket__grid grid'>
      <div className='noticeBar__container'>
        <p>Verify tickets have been processed to completion prior to submitting for resolutions. <u>Click here for a procedure overview.</u></p>
      </div>
      <div className='sidebar__left__container grid'>
        <div className='sidebar__left__title'>
          <h3>Tickets</h3>
          <Button variant='contained'>+ New Ticket</Button>
        </div>
        <div className='sidebar__left__search'>
          <TextField 
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Search in All Tickets...'
          InputProps={{startAdornment: 
            <InputAdornment
            position='start'
              sx={{marginRight: '0.5rem'}}>
                <IconSearch size={'1rem'}/>
            </InputAdornment>
          }}/>
        </div>
        <div className='sidebar__left__content'>
            <Stack direction='column' spacing={0} className='sidebar__left__content-list'>
              <ListItem className='sidebar__left__content-list-item'>
                <p2 is="custom">All Tickets</p2>
              </ListItem>
              <ListItem className='sidebar__left__content-list-item'>
                <p2 is="custom">Tickets to Handle</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='sidebar__left__content-list-item'>
                <p2 is="custom">My Open Tickets</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='sidebar__left__content-list-header'>
                <p4 is="custom">My Views</p4>
              </ListItem>
              <ListItem className='sidebar__left__content-list-item'>
                <p2 is="custom">My Tickets in last 7 days</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='sidebar__left__content-list-header'>
                <p4 is="custom">Statuses</p4>
              </ListItem>
              <ListItem className='sidebar__left__content-list-item'>
                <p2 is="custom">Open</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='sidebar__left__content-list-item'>
                <p2 is="custom">Pending</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='sidebar__left__content-list-item'>
                <p2 is="custom">On hold</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='sidebar__left__content-list-item'>
                <p2 is="custom">Solved</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='sidebar__left__content-list-item'>
                <p2 is="custom">Closed</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
            </Stack>
        </div>
      </div>
      <div className='mainContent__container grid'>
        <div className='mainContent__title'>
          <h3>{`{variable}`}</h3>
          <IconInfoCircle className='mainContent__title__icon'/>
        </div>
        <div className='mainContent__filter'>
          <Button variant='outlined' disableRipple>+ Add filter</Button>
        </div>
        <div className='mainContent__content'>
          <div className='mainContent__total__tickets__bar'>
            <p4 is="custom">{`{variable}`}</p4>
          </div>
          <div className='mainContent__ticket__totals'>
            
          </div>
        </div>
      </div>
    </div>
  )
}
