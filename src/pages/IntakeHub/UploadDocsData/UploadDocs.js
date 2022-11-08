import { Button, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import { useFirestoreQuery } from '@react-query-firebase/firestore';
import { collection, query } from 'firebase/firestore'
import { ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { db, storage } from '../../../firebase/config'
import { setNoticeBarText } from '../../../redux/globalReducer';


export default function UploadDocs() {

  const [disabled,setDisabled] = useState(true)
  const [disabled2,setDisabled2] = useState(true)
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [group,setGroup] = useState('')
  const dispatch = useDispatch();

  const handleChoice = (groupName) => {
    setGroup(groupName);
    setDisabled(false)
    console.log(groupName)
    setDisabled2(false)
  }
  const handleFileSelect = (event) => {
    const array = [...selectedFiles]
    Array.from(event.target.files).forEach(file => {
      array.push(file)
      setSelectedFiles([...array])
      console.log(selectedFiles)
    });
  }
const handleRemove = (index) => {
  let array = [...selectedFiles]
  if (index > -1) {
    array.splice(index, 1)
    setSelectedFiles([...array])
  }
}
const handleFileSubmit = () => {
  setDisabled(true)
  setDisabled2(true)
  selectedFiles.forEach(file => {
    const storageRef = ref(storage, `${group}/${file.name}`);
    uploadBytes(storageRef, file).then(() => {
      console.log('successful upload')
    }).catch(error => {
      console.log(error)
    });
    setTimeout(() => {
      setSelectedFiles([]);
      dispatch(setNoticeBarText('Document Uploaded Successfully! 0 Errors discovered!'))
    },1000)
  })
}

  const submittedRef = query(collection(db,'queue'));
  const submittedQuery = useFirestoreQuery(['queue'], submittedRef, {
    subscribe: true,
    includeMetadataChanges: true
  })

  if (submittedQuery.isLoading) {
    return <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading...</div>
  }
  const submittedData = submittedQuery.data

  return (
    <>    
      <p3 is='custom'>All file types are accepted and multiple files can be uploaded at once. <br/> Select your group below and click on upload to begin. Once you are satisfied with the chosen files, click Submit Documents.</p3>
      <p3 is='custom' />
      <div>
        <TextField
        variant='outlined'
        size='small'
        className='sidebar__left_search__input input__narrower'
        select
        onChange={(e) => handleChoice(e.target.value)}
        >
          {submittedData.docs.map((doc,i) => {
            
            const data = doc.data()
            if (data.groupName) {
            return (
              <MenuItem index={i} value={data.groupName}>{data.groupName}</MenuItem>
            )
          }
          else return null
          })}
        </TextField>
      <Button variant='contained' onClick={handleFileSubmit} disabled={disabled2}>Submit Documents</Button> 
      </div>
      <Button variant='contained' sx={{marginTop: '1rem'}} component='label' disabled={disabled}>
        Upload
        <input hidden multiple type='file' onChange={handleFileSelect}/>
      </Button>
      <p3 is='custom' />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow style={{width: '100%'}}>
              <TableCell width={'70%'}>Document Name</TableCell>
              <TableCell width={'30%'}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              selectedFiles.map((file,i) => {
                return (
                  <TableRow>
                    <TableCell>{file.name}</TableCell>
                    <TableCell><p style={{cursor: 'pointer'}} index={i} onClick={(e) => handleRemove(e.target.getAttribute("index"))}>Remove</p></TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
