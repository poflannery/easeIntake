import { Chip, ListItem, Stack } from '@mui/material'
import React from 'react'

export default function NewBuildSidebar() {
  return (
    <Stack direction='column' spacing={0}className='navigation__left__content-list'>
              <ListItem className='navigation__left__content-list-header'>
                <p4 is="custom">The Group</p4>
              </ListItem>
              <ListItem className='navigation__left__content-list-item' >
                <p2 is="custom">Basic Information</p2>
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">Administrator</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='navigation__left__content-list-header'>
                <p4 is="custom">Eligibility Details</p4>
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">General</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='navigation__left__content-list-header'>
                <p4 is="custom">Coverages</p4>
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">Medical/Dental/Vision</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">Life/ADD</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">STD/LTD</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">Financial</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">Other</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='navigation__left__content-list-header'>
                <p4 is="custom">Additional Details</p4>
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">Rates</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">Deadlines</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">Additional Notes</p2>
                <Chip variant='filled' size='small' label={''} />
              </ListItem>
            </Stack>
  )
}
