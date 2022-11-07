import { Button, Checkbox, Chip, IconButton, InputAdornment, ListItem, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip } from '@mui/material';
import { IconCheck, IconInfoCircle, IconMail, IconSearch, IconX } from '@tabler/icons';
import { collection, query } from 'firebase/firestore';
import React from 'react';
import '../../sass/ComponentPages/TicketsLanding.scss';
import { db } from '../../firebase/config'
import { useFirestoreQuery } from '@react-query-firebase/firestore';




export default function TicketLanding() {

// Firebase Queries
const AllTickets = query(collection(db, 'tickets/_/All'));
const allCollection = useFirestoreQuery(['tickets/_/All'], AllTickets, {
  subscribe: true,
  includeMetadataChanges: true
});

if ( allCollection.isLoading ) {
  return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading...</div>
}
const allQuery = allCollection.data

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
          <TableContainer>
              <Table width='100%'>
                <TableHead>
                  <TableRow>
                    <TableCell padding='checkbox'>
                      <Checkbox size='small' />
                    </TableCell>
                    <TableCell align="left" width={'15%'}>
                      <p4 is='custom' className='table__font__css'>Requestor</p4>
                    </TableCell>
                    <TableCell align="left" width={'40%'}>
                      <p4 is='custom' className='table__font__css'>Subject</p4>
                    </TableCell>
                    <TableCell align="left" width={'13%'}>
                      <p4 is='custom' className='table__font__css'>User</p4>
                    </TableCell>
                    <TableCell align="left" width={'7%'}>
                      <p4 is='custom' className='table__font__css'>Status</p4>
                    </TableCell>
                    <TableCell align="left" width={'13%'}>
                      <p4 is='custom' className='table__font__css'>Created</p4>
                    </TableCell>
                    <TableCell align="left" width={'15%'}>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allQuery.docs.map(doc => {
                  const data = doc.data()
                  return (
                    <TableRow className='total__table__row' key={doc.id}>
                      <TableCell padding='checkbox'>
                      <Checkbox size='small' />
                      </TableCell>
                      <TableCell>
                      <div className='mainContent__ticket__totals__requestor'>
                          <icon is='custom'></icon>
                          <div>
                          <p1 is="custom">{data.requestor}</p1>
                          <p4 is="custom">{data.email}</p4>
                          </div>
                      </div>
                      </TableCell>
                      <TableCell>
                      <p1 is="custom">{data.subject}</p1>
                      </TableCell>
                      <TableCell>
                      <p1 is="custom">{data.user}</p1>
                      </TableCell>
                      <TableCell>
                      <Chip variant='filled' color={data.status === 'closed' ? 'error' : data.status === 'solved' ? 'success' : data.status === 'pending' ? 'warning' : 'primary'} label={data.status} size='small' />
                      </TableCell>
                      <TableCell>
                      <p1 is="custom">{new Date(data.lastUpdate).toLocaleString()}</p1>
                      </TableCell>
                      <TableCell>
                        <Tooltip title='Delete Ticket'><IconButton><IconX /></IconButton></Tooltip>
                        <Tooltip title='Mark as Completed'><IconButton><IconCheck /></IconButton></Tooltip>
                        <Tooltip title='Send Automated Update'><IconButton><IconMail /></IconButton></Tooltip>
                      </TableCell>
                    </TableRow>
                    )})}
                  </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
