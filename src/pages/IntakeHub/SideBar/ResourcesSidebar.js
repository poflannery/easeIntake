import { ListItem, Stack } from '@mui/material'
import React from 'react'

export default function ResourcesSidebar() {

  return (
    <Stack direction='column' spacing={0}className='navigation__left__content-list'>
              <ListItem className='navigation__left__content-list-header'>
                <p4 is="custom">Documents</p4>
              </ListItem>
              <ListItem className='navigation__left__content-list-item--selected' >
                <p2 is="custom">Downloads</p2>
              </ListItem>
            </Stack>
  )
}
