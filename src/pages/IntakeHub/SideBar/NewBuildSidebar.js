import { ListItem, Stack } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAdditionalNewBuild, setAdministratorNewBuild, setBasicInformationNewBuild, setCoveragesFiveNewBuild, setCoveragesFourNewBuild, setCoveragesOneNewBuild, setCoveragesThreeNewBuild, setCoveragesTwoNewBuild, setDeadlinesNewBuild, setEligibilityNewBuild, setRatesNewBuild } from '../../../redux/newBuildSelectionReducer';

export default function NewBuildSidebar() {

// redux
const store = useSelector(state => state.newBuildSidebar)
const dispatch = useDispatch();

// methods
const handleListClickBasic = () => {
dispatch(setBasicInformationNewBuild());
}
const handleListClickAdmin = () => {
dispatch(setAdministratorNewBuild());
}
const handleListClickEligibility = () => {
dispatch(setEligibilityNewBuild());
}
const handleListClickCoveragesOne = () => {
dispatch(setCoveragesOneNewBuild());
}
const handleListClickCoveragesTwo = () => {
dispatch(setCoveragesTwoNewBuild());
}
const handleListClickCoveragesThree = () => {
dispatch(setCoveragesThreeNewBuild());
}
const handleListClickCoveragesFour = () => {
dispatch(setCoveragesFourNewBuild());
}
const handleListClickCoveragesFive = () => {
dispatch(setCoveragesFiveNewBuild());
}
const handleListClickRates = () => {
dispatch(setRatesNewBuild());
}
const handleListClickDeadlines = () => {
dispatch(setDeadlinesNewBuild());
}
const handleListClickAdditional = () => {
dispatch(setAdditionalNewBuild());
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
                <p2 is="custom">General</p2>
              </ListItem>
              <ListItem className='navigation__left__content-list-header'>
                <p4 is="custom">Coverages</p4>
              </ListItem>
              <ListItem className={store.name === 'CoveragesOne' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'} 
              onClick={handleListClickCoveragesOne}>
                <p2 is="custom">Medical/Dental/Vision</p2>
              </ListItem>
              <ListItem className={store.name === 'CoveragesTwo' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'} 
              onClick={handleListClickCoveragesTwo}>
                <p2 is="custom">Life/ADD</p2>
              </ListItem>
              <ListItem className={store.name === 'CoveragesThree' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'} 
              onClick={handleListClickCoveragesThree}>
                <p2 is="custom">STD/LTD</p2>
              </ListItem>
              <ListItem className={store.name === 'CoveragesFour' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'} 
              onClick={handleListClickCoveragesFour}>
                <p2 is="custom">Financial</p2>
              </ListItem>
              <ListItem className={store.name === 'CoveragesFive' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'} 
              onClick={handleListClickCoveragesFive}>
                <p2 is="custom">Other</p2>
              </ListItem>
              <ListItem className='navigation__left__content-list-header'>
                <p4 is="custom">Additional Details</p4>
              </ListItem>
              <ListItem className={store.name === 'Rates' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'} 
              onClick={handleListClickRates}>
                <p2 is="custom">Rates</p2>
              </ListItem>
              <ListItem className={store.name === 'Deadlines' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'} 
              onClick={handleListClickDeadlines}>
                <p2 is="custom">Deadlines</p2>
              </ListItem>
              <ListItem className={store.name === 'Additional' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'} 
              onClick={handleListClickAdditional}>
                <p2 is="custom">Additional Notes</p2>
              </ListItem>
            </Stack>
  )
}
