import { Button, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

export default function UploadDocs() {
  return (
    <>    
      <div>
        <Button variant='contained' sx={{marginTop: '1rem'}}>Upload</Button>
        <Button variant='contained' sx={{marginTop: '1rem'}}>Submit Documents</Button>
      </div>
      <p3 is='custom' />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow style={{width: '100%'}}>
              <TableCell width={'70%'}>Document Name</TableCell>
              <TableCell width={'30%'}>Actions</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </>
  )
}
