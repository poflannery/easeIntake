import { IconArrowLeft } from '@tabler/icons'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router'
import { clearNewBuildValues } from '../../redux/NewBuildValuesReducer';

export default function Confirmation() {

// router
const navigate = useNavigate();
const location = useLocation();
const dispatch = useDispatch();

useEffect(() => {
    dispatch(clearNewBuildValues())
     // eslint-disable-next-line
},[])


  return (
    <div className=' container__fullpage grid authentication__layout'>
        <div className='auth__layout__messageBanner'>
            <p3 is='custom'></p3>
        </div>
        <div className='auth__layout__titleBanner'>
            <h3>Successful {location.state.type}</h3>
            <div onClick={() => navigate('/dashboard/intakeHub', {replace: true})}><IconArrowLeft /><p1>Return to Intake Page</p1></div>
        </div>
        <div className='submit__ticket__content grid'>
            <div className='success_container'>
                <p1 is='custom'>{location.state.message}</p1>
            </div>
        </div>  
    </div>
  )
}
