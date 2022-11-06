import { Button, MenuItem, Table, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import { useFirestoreQuery } from '@react-query-firebase/firestore';
import { collection, query } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../../../firebase/config'

export default function UploadDocs() {

  const [disabled,setDisabled] = useState(true)
  const [selectedFiles, setSelectedFiles] = useState({});


  const handleChoice = () => {
    setDisabled(false)
  }
  const handleFileSelect = (event) => {
    setSelectedFiles(event.target.files)
    console.log(event.target.files)
  }



  const submittedRef = query(collection(db,'submitted'));
  const submittedQuery = useFirestoreQuery(['submitted'], submittedRef, {
    subscribe: true,
    includeMetadataChanges: true
  })

  if (submittedQuery.isLoading) {
    return <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading...</div>
  }
  const submittedData = submittedQuery.data

  return (
    <>    
      <p3 is='custom'>Select your group from the list below.</p3>
      <div>
        <TextField
        variant='outlined'
        size='small'
        className='sidebar__left_search__input input__narrower'
        select
        >
          {submittedData.docs.map((doc,i) => {
            
            const data = doc.data()
            if (data.groupName) {
            return (
              <MenuItem index={i} value={data.groupName} onClick={handleChoice}>{data.groupName}</MenuItem>
            )
          }})}
        </TextField>
        <Button variant='contained' sx={{marginTop: '1rem'}} component='label' disabled={disabled}>
          Upload
          <input hidden multiple type='file' onChange={handleFileSelect}/>
        </Button>
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
