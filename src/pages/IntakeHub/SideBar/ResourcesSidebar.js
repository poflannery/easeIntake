import { Chip, ListItem, Stack } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCarrierConnectionsGuides, setDownloads, setHelpfulPackets, setOther, setPayroll, setProcedures } from '../../../redux/resourcesReducer';

export default function ResourcesSidebar() {


// redux
const dispatch = useDispatch();
const store = useSelector(state => state.resources)



// methods
const handleListClickProcedures = () => {
  dispatch(setProcedures());
}
const handleListClickCarrierConnectionsGuides = () => {
  dispatch(setCarrierConnectionsGuides());
}
const handleListClickHelpfulPackets = () => {
  dispatch(setHelpfulPackets());
}
const handleListClickDownloads = () => {
  dispatch(setDownloads());
}
const handleListClickPayroll = () => {
  dispatch(setPayroll());
}
const handleListClickOther = () => {
  dispatch(setOther());
}






  return (
    <Stack direction='column' spacing={0}className='navigation__left__content-list'>
              <ListItem className='navigation__left__content-list-header'>
                <p4 is="custom">Ease</p4>
              </ListItem>
              <ListItem className={store.name === 'Procedures' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'} 
              onClick={handleListClickProcedures}>
                <p2 is="custom">Procedures</p2>
              </ListItem>
              <ListItem className={store.name === 'Carrier Connections Guides' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'} 
              onClick={handleListClickCarrierConnectionsGuides}>
                <p2 is="custom">Carrier Connection Guides</p2>
              </ListItem>
              <ListItem className={store.name === 'Helpful Packets' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'} 
              onClick={handleListClickHelpfulPackets}>
                <p2 is="custom">Helpful Packets</p2>
              </ListItem>
              <ListItem className='navigation__left__content-list-header'>
                <p4 is="custom">Build Resources</p4>
              </ListItem>
              <ListItem className={store.name === 'Downloads' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'} 
              onClick={handleListClickDownloads}>
                <p2 is="custom">Downloads</p2>
              </ListItem>
              <ListItem className={store.name === 'Payroll' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'} 
              onClick={handleListClickPayroll}>
                <p2 is="custom">Payroll Information</p2>
              </ListItem>
              <ListItem className='navigation__left__content-list-header'>
                <p4 is="custom">Additional Documents</p4>
              </ListItem>
              <ListItem className={store.name === 'Other' ? 'navigation__left__content-list-item--selected' : 'navigation__left__content-list-item'} 
              onClick={handleListClickOther}>
                <p2 is="custom">Other</p2>
              </ListItem>
            </Stack>
  )
}
