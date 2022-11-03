import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React from 'react'

export default function Queue() {
  return (
    <>
          <TableContainer className='table__font__css'>
            <Table>
              <TableHead>
                <TableRow >
                  <TableCell
                  width={'50%'}
                  >Group Name</TableCell>
                  <TableCell
                  width={'20%'}
                  >Current Status</TableCell>
                  <TableCell
                  width={'30%'}
                  >Estimated Completion Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow className='total__table__row'>
                  <TableCell>Test</TableCell>
                  <TableCell>Test</TableCell>
                  <TableCell>Test</TableCell>
                </TableRow>
                <TableRow className='total__table__row'>
                  <TableCell>Test</TableCell>
                  <TableCell>Test</TableCell>
                  <TableCell>Test</TableCell>
                </TableRow>
                <TableRow className='total__table__row'>
                  <TableCell>Test</TableCell>
                  <TableCell>Test</TableCell>
                  <TableCell>Test</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          
    </>
  )
}
