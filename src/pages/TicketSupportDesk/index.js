
// Mui Imports
import { Button, MenuItem, TextField } from '@mui/material'

// React Imports
import React, { useState } from 'react'

// Firebase Imports
import {db} from '../../firebase/config'
import { useFirestoreCollectionMutation, useFirestoreQuery } from '@react-query-firebase/firestore';
import { collection, query } from 'firebase/firestore'
import { IconArrowLeft } from '@tabler/icons';
import { useNavigate } from 'react-router';



export default function TicketSupportDesk() {
    
// local states
const [description,setDescription] = useState('');
const [user,setUser] = useState('');
const [email,setEmail] = useState('');
const [requestor,setRequestor] = useState('');
const [subject,setSubject] = useState('');
const [submitted,setSubmitted] = useState(0)
const [priority,setPriority] = useState('')

// Collection Queries
const allTicketRef = collection(db, 'tickets/_/All');
const pendingTicketRef = collection(db, 'tickets/_/pending');
const allTicketMutation = useFirestoreCollectionMutation(allTicketRef, {
    onMutate() {
        setSubmitted(submitted => submitted + 1)
    }
});
const pendingTicketMutation = useFirestoreCollectionMutation(pendingTicketRef, {
    onMutate() {
        setSubmitted(submitted => submitted + 1)
    }
});

const usersRef = query(collection(db, 'users'))
const usersCollection = useFirestoreQuery(['users'], usersRef, {
    subscribe: true,
    includeMetadataChanges: true
})


// router
const navigate = useNavigate();


// methods
function handleNewTicketSubmit() {
    allTicketMutation.mutate({
        email: email,
        lastUpdate: new Date().getTime(),
        requestor: requestor,
        status: 'pending',
        subject: subject,
        user: user,
        description: description,
        priority: priority
    });
    pendingTicketMutation.mutate({
        email: email,
        lastUpdate: new Date().getTime(),
        requestor: requestor,
        status: 'pending',
        subject: subject,
        user: user,
        description: description,
        priority: priority
    });
};
const handlePriorityChange = (event) => {
    setPriority(event.target.value)
}
const handleUserChange = (event) => {
    setUser(event.target.value)
}

// Loading Sequence

if (usersCollection.isLoading) {
    return <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading...</div>
}
const usersSnapshot = usersCollection.data





// return \\
  return (
    <div className=' container__fullpage grid authentication__layout'>
      <div className='auth__layout__messageBanner'>
        <p3 is='custom'>Your Benefits Technology Specialist will follow up. Please review your details prior to submitting.</p3>
      </div>
      <div className='auth__layout__titleBanner'>
        <h3>Submit a New Ticket</h3>
        <div onClick={() => navigate('/')}><IconArrowLeft /><p1>Return to Home Screen</p1></div>
      </div>
      <div className='submit__ticket__content grid'>
            <div className='submit__ticket__container'>
            {
                submitted === 2 &&
                <p3 style={{textAlign: 'center', margin: '0 auto'}}>Submitted Successfully.<br/> Please return to the main page or refresh to submit an additional ticket.</p3>
            }
            { (submitted === 0 || submitted === 1) &&
                <>
                    <p3 is="custom">Brief Title</p3>
                        <TextField
                        variant='outlined'
                        size='small'
                        className='sidebar__left_search__input' 
                        placeholder='Subject...'
                        onChange={(e) => setSubject(e.target.value)}
                        />
                        <p3 is="custom">Your Details</p3>
                        <div>
                        <TextField
                        variant='outlined'
                        size='small'
                        className='sidebar__left_search__input input__narrow'
                        InputLabelProps={{style: {fontSize: '0.9rem', fontFamily: 'Source Sans Pro', color: 'rgba(0,0,0,0.4)'}}}
                        SelectDisplayProps={{style: {fontSize: '0.9rem', fontFamily: 'Source Sans Pro', color: 'rgba(0,0,0,0.4)'}}}
                        select
                        label='Your Name...'
                        value={user}
                        onChange={handleUserChange}>
                            { usersSnapshot.docs.map(doc => {
                                const data = doc.data()
                                return (
                                    <MenuItem value={data.name}>{data.name}</MenuItem>
                                )
                            })}
                        </TextField>
                        <TextField
                        variant='outlined'
                        size='small'
                        className='sidebar__left_search__input input__narrow' 
                        placeholder='Email...'
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>
                        <p3 is="custom">Group ( if applicable )</p3>
                        <div>
                        <TextField
                        variant='outlined'
                        size='small'
                        className='sidebar__left_search__input input__narrow' 
                        placeholder='Name...'
                        onChange={(e) => setRequestor(e.target.value)}
                        />
                        <TextField
                        variant='outlined'
                        size='small'
                        className='sidebar__left_search__input input__narrow' 
                        label='Priority...'
                        InputLabelProps={{style: {fontSize: '0.9rem', fontFamily: 'Source Sans Pro', color: 'rgba(0,0,0,0.4)'}}}
                        select
                        value={priority}
                        onChange={handlePriorityChange}>
                            <MenuItem value='Urgent'>Urgent</MenuItem>
                            <MenuItem value='High'>High</MenuItem>
                            <MenuItem value='Medium'>Medium</MenuItem>
                            <MenuItem value='Low'>Low</MenuItem>
                        </TextField>
                        </div>
                        <p3 is="custom">Describe the Problem</p3>
                        <TextField
                        variant='outlined'
                        size='small'
                        multiline
                        rows={6}
                        className='sidebar__left_search__input' 
                        placeholder='Type some Details...'
                        onChange={(e) => setDescription(e.target.value)}
                        />
                    <Button disabled={(allTicketMutation.isLoading && pendingTicketMutation.isLoading)} variant='contained' sx={{marginTop: '1rem'}} onClick={handleNewTicketSubmit}>Submit</Button>
                </>
            }
            </div>
        </div>
    </div>
  )
}
