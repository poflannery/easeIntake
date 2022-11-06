import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useFirestoreQuery } from '@react-query-firebase/firestore';
import { collection, query } from 'firebase/firestore'
import React from 'react'
import { db } from '../../../firebase/config'


export default function Queue() {

  const queueRef = query(collection(db, 'queue'));
  const queueCollection = useFirestoreQuery(['queue'], queueRef, {
    subscribe: true,
    includeMetadataChanges: true
  })

  if (queueCollection.isLoading) {
    return <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading...</div>
  }
  const queueData = queueCollection.data

  return (
    <>
          <TableContainer className='table__font__css'>
            <Table>
              <TableHead>
                <TableRow >
                  <TableCell
                  width={'40%'}
                  >Group Name</TableCell>
                  <TableCell
                  width={'30%'}
                  >Current Status</TableCell>
                  <TableCell
                  width={'30%'}
                  >Submission Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {queueData.docs.map(doc => {
                  const data = doc.data()
                  return (
                  <TableRow className='total__table__row'>
                    <TableCell className='total__Table__cell'>{data.groupName}</TableCell>
                    <TableCell className='total__Table__cell'>{data.status}</TableCell>
                    <TableCell className='total__Table__cell'>{data.submitted}</TableCell>
                  </TableRow>
                )})}
              </TableBody>
            </Table>
          </TableContainer>
          
    </>
  )
}
