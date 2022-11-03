import { Chip, ListItem, Stack } from '@mui/material'
import React from 'react'

export default function UploadDocsSidebar() {
  return (
    <Stack direction='column' spacing={0}className='navigation__left__content-list'>
              <ListItem className='navigation__left__content-list-header'>
                <p4 is="custom">Builds</p4>
              </ListItem>
              <ListItem className='navigation__left__content-list-item--selected' >
                <p2 is="custom">Documents Upload</p2>
              </ListItem>
            </Stack>
  )
}
