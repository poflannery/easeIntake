
// MUI Imports
import { Button, Chip, IconButton, ListItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

// React Imports
import React from 'react'

// Firebase Imports
import { collection, query } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useFirestoreQuery } from '@react-query-firebase/firestore'
import { IconUser } from '@tabler/icons'
import '../../sass/ComponentPages/Users.scss';
export default function Users() {




// Collection Queries    
const usersRef = query(collection(db, 'users'))
const usersCollection = useFirestoreQuery(['users'], usersRef, {
    subscribe: true,
    includeMetadataChanges: true
})

if (usersCollection.isLoading) {
    return <div>Loading...</div>
}
const usersSnapshot = usersCollection.data


  return (
    <div className='users__container grid'>
        <div className='noticeBar__container'>
            <p>Your Benefits Technology Specialist will follow up within the hour. Please review the details prior to submitting.</p>
        </div>
        <div className='sidebar__right__container grid'>
            <div className='sidebar__right__container__title'>
                <h3>Details</h3>
            </div>
        </div>
        <div className='mainContent__left grid'>
            <div className='mainContent__left__title'>
                <ListItem className='mainContent__left__title__category'>{`Users (${usersSnapshot.docs.length})`}</ListItem>
                <Button variant='contained'>+ Add</Button>
            </div>
            <div className='mainContent__left__content'>
                <TableContainer >
                <Table width='100%'>
                    <TableHead >
                    <TableRow>
                        <TableCell align="left" width={'10%'} />
                        <TableCell align="left" width={'50%'}>
                        <p4 is='custom' className='table__font__css'>Name</p4>
                        </TableCell>
                        <TableCell align="left" width={'40%'}>
                        <p4 is='custom' className='table__font__css'>Role</p4>
                        </TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        { usersSnapshot.docs.map(doc => {
                            const data = doc.data()
                            return (
                            <TableRow className='total__table__row'>
                                <TableCell align="center">
                                    <IconButton><IconUser size={'2rem'}/></IconButton>
                                </TableCell>
                                <TableCell align="left">
                                    <div className='mainContent__ticket__totals__requestor'>
                                        <div>
                                        <p1 is="custom">{data.name}</p1>
                                        <p4 is="custom">{data.email}</p4>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Chip variant='filled' color='primary' label={data.admin === true ? 'Admin' : 'User'} size='small'/>
                                </TableCell>
                            </TableRow>                            
                        )})}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
        </div>
    </div>
  )
}
