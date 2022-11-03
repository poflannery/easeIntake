import { Chip, ListItem, Stack } from '@mui/material'
import React from 'react'

export default function ResourcesSidebar() {
  return (
    <Stack direction='column' spacing={0}className='navigation__left__content-list'>
              <ListItem className='navigation__left__content-list-header'>
                <p4 is="custom">Ease</p4>
              </ListItem>
              <ListItem className='navigation__left__content-list-item' >
                <p2 is="custom">Procedures</p2>
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">Carrier Connection Guides</p2>
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">Helpful Packets</p2>
              </ListItem>
              <ListItem className='navigation__left__content-list-header'>
                <p4 is="custom">Build Resources</p4>
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">Downloads</p2>
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">Payroll Information</p2>
              </ListItem>
              <ListItem className='navigation__left__content-list-header'>
                <p4 is="custom">Additional Documents</p4>
              </ListItem>
              <ListItem className='navigation__left__content-list-item navigation__left__chipped' >
                <p2 is="custom">Other</p2>
              </ListItem>
            </Stack>
  )
}
