import { MenuItem, TextField } from '@mui/material'
import React from 'react'



import AddEmployee from '../../../downloads/adminResources/Add Employee.pdf'









export default function Downloads() {




  return (
    <>
          <p3 is="custom">PDF Files will open in the browser. All other files will automatically download.</p3>
          <p3 is='custom' />
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          label='Admin Resources'
          select
          >
            <MenuItem value='Add Employee' onClick={() => window.open(AddEmployee, '_blank')}>Add Employee</MenuItem>
            <MenuItem value='Add Employment Details'>Add Employment Details</MenuItem>
            <MenuItem value='Company Admin Checklist'>Company Admin Checklist</MenuItem>
            <MenuItem value='Email Templates (Multiple Guides)'>Email Templates (Multiple Guides)</MenuItem>
            <MenuItem value='Employee Unable to Log In'>Employee Unable to Log In</MenuItem>
            <MenuItem value='Qualifying_Events_Picture'>Qualifying_Events_Picture</MenuItem>
            <MenuItem value='Qualifying_Events'>Qualifying_Events</MenuItem>
            <MenuItem value='Rehire Employee'>Rehire Employee</MenuItem>
            <MenuItem value='Reports'>Reports</MenuItem>
            <MenuItem value='Terminate Employee Benefits'>Terminate Employee Benefits</MenuItem>
            <MenuItem value='Terminate Employee'>Terminate Employee</MenuItem>
            <MenuItem value='Why Enroll Online Guide'>Why Enroll Online Guide</MenuItem>
          </TextField>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          label='Carrier Connection Guides'
          select
          >
            <MenuItem value='EaseConnect_834_Broker_Guide'>EaseConnect_834_Broker_Guide</MenuItem>
            <MenuItem value='Equitable Connection Guide 2-24-22'>Equitable Connection Guide 2-24-22</MenuItem>
            <MenuItem value='FL-EC_EC+ Comparison_071322'>FL-EC_EC+ Comparison_071322</MenuItem>
            <MenuItem value='HealthPartners Integration Guide'>HealthPartners Integration Guide</MenuItem>
            <MenuItem value='LFG Privacy Notice'>LFG Privacy Notice</MenuItem>
            <MenuItem value='Lincoln Auth Form'>Lincoln Auth Form</MenuItem>
            <MenuItem value='ManhattanLife Connection Guide 2-24-22'>ManhattanLife Connection Guide 2-24-22</MenuItem>
            <MenuItem value='MetLife Broker Connection Request Form'>MetLife Broker Connection Request Form</MenuItem>
            <MenuItem value='Principal Broker Platform Agreement'>Principal Broker Platform Agreement</MenuItem>
            <MenuItem value='RSL Ease Self-Billing Job Aid Final'>RSL Ease Self-Billing Job Aid Final</MenuItem>
            <MenuItem value='Transamerica Connection Guide'>Transamerica Connection Guide</MenuItem>
            <MenuItem value='Trustmark'>Trustmark</MenuItem>
            <MenuItem value='UCD Connection Guide 8-22-2022'>UCD Connection Guide 8-22-2022</MenuItem>
            <MenuItem value='unum connection guide'>unum connection guide</MenuItem>
          </TextField>
          </div>
          <p3 is='custom' />
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          label='Employee Experience Guides'
          select
          >
            <MenuItem value='Beneficiaries'>Beneficiaries</MenuItem>
            <MenuItem value='Employee Add Document'>Employee Add Document</MenuItem>
            <MenuItem value='Employee Add QLE'>Employee Add QLE</MenuItem>
            <MenuItem value='Employee Change Non-QLE Benefits'>Employee Change Non-QLE Benefits</MenuItem>
            <MenuItem value='Employee EaseHR Experience'>Employee EaseHR Experience</MenuItem>
            <MenuItem value='Employee Enrollment at a Glance SP'>Employee Enrollment at a Glance SP</MenuItem>
            <MenuItem value='Employee Enrollment Experience'>Employee Enrollment Experience</MenuItem>
            <MenuItem value='Employee Navigate Your Dashboard'>Employee Navigate Your Dashboard</MenuItem>
            <MenuItem value='Enrollment Summary'>Enrollment Summary</MenuItem>
            <MenuItem value='Health Questionnaire'>Health Questionnaire</MenuItem>
            <MenuItem value='Personal Profile'>Personal Profile</MenuItem>
            <MenuItem value='Reset Locked User Account'>Reset Locked User Account</MenuItem>
            <MenuItem value='Reset User Password'>Reset User Password</MenuItem>
          </TextField>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          label='Broker User Guides'
          select
          >
            <MenuItem value='Add Employee'>Add Employee</MenuItem>
            <MenuItem value='Add Employment Details'>Add Employment Details</MenuItem>
            <MenuItem value='Email Templates (Multiple Guides)'>Email Templates (Multiple Guides)</MenuItem>
            <MenuItem value='Employee Enrollment at a Glance'>Employee Enrollment at a Glance</MenuItem>
            <MenuItem value='Employee Enrollment Experience'>Employee Enrollment Experience</MenuItem>
            <MenuItem value='Employee Unable to Log In'>Employee Unable to Log In</MenuItem>
            <MenuItem value='FAQ'>FAQ</MenuItem>
            <MenuItem value='Maintaining Company Site'>Maintaining Company Site</MenuItem>
            <MenuItem value='Navigate Companies'>Navigate Companies</MenuItem>
            <MenuItem value='Navigate Libraries'>Navigate Libraries</MenuItem>
            <MenuItem value='Navigate Your Broker Portal'>Navigate Your Broker Portal</MenuItem>
            <MenuItem value='Qualifying_Events_Picture'>Qualifying_Events_Picture</MenuItem>
            <MenuItem value='Qualifying_Events'>Qualifying_Events</MenuItem>
            <MenuItem value='Rehire Employee'>Rehire Employee</MenuItem>
            <MenuItem value='Reinstate Employee Benefits'>Reinstate Employee Benefits</MenuItem>
            <MenuItem value='Reports'>Reports</MenuItem>
            <MenuItem value='Setting Up a Connection'>Setting Up a Connection</MenuItem>
            <MenuItem value='Terminate Employee Benefits'>Terminate Employee Benefits</MenuItem>
            <MenuItem value='Terminate Employee'>Terminate Employee</MenuItem>
          </TextField>
          </div>
          <p3 is='custom' />
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          label='Payroll Integrations'
          select
          >
            <MenuItem value='BenefitMall PayFocus Pro Guide'>BenefitMall PayFocus Pro Guide</MenuItem>
            <MenuItem value='Customer Paylocity SOW - SAMPLE'>Customer Paylocity SOW - SAMPLE</MenuItem>
            <MenuItem value='Paylocity Guide'>Paylocity Guide</MenuItem>
            <MenuItem value='TRAXPayroll Guide'>TRAXPayroll Guide</MenuItem>
          </TextField>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          label='Additional Documents'
          select
          >
            <MenuItem value='Ease_Custom_Rate_Import_All'>Ease_Custom_Rate_Import_All</MenuItem>
            <MenuItem value='Ease_Custom_Rate_Import_Table'>Ease_Custom_Rate_Import_Table</MenuItem>
            <MenuItem value='Ease_Custom_Rate_Import_Tier'>Ease_Custom_Rate_Import_Tier</MenuItem>
            <MenuItem value='Ease_Custom_Rate_Import_TierTable'>Ease_Custom_Rate_Import_TierTable</MenuItem>
            <MenuItem value='Group Training Guide'>Group Training Guide</MenuItem>
            <MenuItem value='Universal Form Example'>Universal Form Example</MenuItem>
          </TextField>
          </div>
    </>
  )
}
