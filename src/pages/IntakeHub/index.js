// MUI Imports
import { Stack } from '@mui/system';
import { Button, Chip, ListItem } from '@mui/material';

// React Imports
import React from 'react'


export default function IntakeHub() {
  return (
    <div className=' intakeHub__layout grid'>
      <div className='noticeBar__container'>
        <p>Verify tickets have been processed to completion prior to submitting for resolutions. <u>Click here for a procedure overview.</u></p>
      </div>
      <div className='navigation__left grid'>
        <div className='navigation__left__title'>
          <h3>Tickets</h3>
          <Button variant='contained' >Submit Build</Button>
        </div>
        <div className='navigation__left__content'>
            <Stack direction='column' spacing={0}className='navigation__left__content-list'>
              <ListItem className='navigation__left__content-list-item' >
                <p2 is="custom">All Tickets</p2>
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">Tickets to Handle</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">My Open Tickets</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='navigation__left__content-list-header'>
                <p4 is="custom">My Views</p4>
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">My Tickets in last 7 days</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='navigation__left__content-list-header'>
                <p4 is="custom">Statuses</p4>
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">Open</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">Pending</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">On hold</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">Solved</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">Closed</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
            </Stack>
        </div>
      </div>
    </div>
  )
}
