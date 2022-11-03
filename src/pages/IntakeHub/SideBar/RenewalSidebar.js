import { ListItem, Stack } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAdditionalRenewal, setAdministratorRenewal, setBasicInformationRenewal, setCoveragesOneRenewal, setCoveragesTwoRenewal, setDeadlinesRenewal, setEligibilityRenewal, setRatesRenewal } from '../../../redux/renewalSelectionReducer';

export default function RenewalSidebar() {

// redux
const dispatch = useDispatch();
const store = useSelector(state => state.renewalList)

// Methods
const handleListClickBasic = () => {
  dispatch(setBasicInformationRenewal());
}
const handleListClickAdmin = () => {
  dispatch(setAdministratorRenewal());
}
const handleListClickEligibility = () => {
  dispatch(setEligibilityRenewal());
}
const handleListClickCoveragesOne = () => {
  dispatch(setCoveragesOneRenewal());
}
const handleListClickCoveragesTwo = () => {
  dispatch(setCoveragesTwoRenewal());
}
const handleListClickRates = () => {
  dispatch(setRatesRenewal());
}
const handleListClickDeadlines = () => {
  dispatch(setDeadlinesRenewal());
}
const handleListClickAdditional = () => {
  dispatch(setAdditionalRenewal());
}




  return (
    <Stack direction='column' spacing={0}className='navigation__left__content-list'>
              <ListItem className='navigation__left__content-list-header'>
                <p4 is="custom">The Group</p4>
              </ListItem>
              <ListItem className={store.name === 'Basic Information' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'} 
              onClick={handleListClickBasic}>
                <p2 is="custom">Basic Information</p2>
              </ListItem>
              <ListItem className={store.name === 'Administrator' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'} 
              onClick={handleListClickAdmin}>
                <p2 is="custom">Administrator</p2>
              </ListItem>
              <ListItem className='navigation__left__content-list-header'>
                <p4 is="custom">Eligibility Details</p4>
              </ListItem>
              <ListItem className={store.name === 'Eligibility' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'} 
              onClick={handleListClickEligibility}>
                <p2 is="custom">Update Changes</p2>
              </ListItem>
              <ListItem className='navigation__left__content-list-header'>
                <p4 is="custom">Coverage Changes</p4>
              </ListItem>
              <ListItem className={store.name === 'CoveragesOne' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'} 
              onClick={handleListClickCoveragesOne}>
                <p2 is="custom">Medical/Dental/Vision</p2>
              </ListItem>
              <ListItem className={store.name === 'CoveragesTwo' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'} 
              onClick={handleListClickCoveragesTwo}>
                <p2 is="custom">All Other Coverages</p2>
              </ListItem>
              <ListItem className='navigation__left__content-list-header'>
                <p4 is="custom">Additional Details</p4>
              </ListItem>
              <ListItem className={store.name === 'Rates' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'} 
              onClick={handleListClickRates}>
                <p2 is="custom">Rate Changes</p2>
              </ListItem>
              <ListItem className={store.name === 'Deadlines' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'}
              onClick={handleListClickDeadlines}>
                <p2 is="custom">Deadlines</p2>
              </ListItem>
              <ListItem className={store.name === 'Additional' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'}
              onClick={handleListClickAdditional} >
                <p2 is="custom">Additional Notes</p2>
              </ListItem>
            </Stack>
  )
}
