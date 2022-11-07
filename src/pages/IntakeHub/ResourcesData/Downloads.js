import { MenuItem, TextField } from '@mui/material'
import React from 'react'



import Admin1 from '../../../downloads/adminResources/Add Employee.pdf'
import Admin2 from '../../../downloads/adminResources/Add Employment Details.pdf'
import Admin3 from '../../../downloads/adminResources/Company Admin Checklist.pdf'
import Admin4 from '../../../downloads/adminResources/Email Templates (Multiple Guides).pdf'
import Admin5 from '../../../downloads/adminResources/Employee Unable to Log In.pdf'
import Admin6 from '../../../downloads/adminResources/Qualifying_Events_Picture.pdf'
import Admin7 from '../../../downloads/adminResources/Qualifying_Events.pdf'
import Admin8 from '../../../downloads/adminResources/Rehire Employee.pdf'
import Admin9 from '../../../downloads/adminResources/Reports.pdf'
import Admin10 from '../../../downloads/adminResources/Terminate Employee Benefits.pdf'
import Admin11 from '../../../downloads/adminResources/Terminate Employee.pdf'
import Admin12 from '../../../downloads/adminResources/WhyEnrollOnlineGuide.pdf'

import connection1 from '../../../downloads/connections/EaseConnect 834 Broker Guide.pdf'
import connection2 from '../../../downloads/connections/Equitable Connection Guide 2-24-22.pdf'
import connection3 from '../../../downloads/connections/FL-EC_EC+ Comparison_071322.pdf'
import connection4 from '../../../downloads/connections/HealthPartners Integration Guide.pdf'
import connection5 from '../../../downloads/connections/LFG Privacy Notice.pdf'
import connection6 from '../../../downloads/connections/Lincoln Auth Form.pdf'
import connection7 from '../../../downloads/connections/ManhattanLife Connection Guide 2-24-22.pdf'
import connection8 from '../../../downloads/connections/MetLife Broker Connection Request Form.xlsx'
import connection9 from '../../../downloads/connections/Principal Broker Platform Agreement.pdf'
import connection10 from '../../../downloads/connections/RSL Ease Self-Billing Job Aid Final.pdf'
import connection11 from '../../../downloads/connections/Transamerica Connection Guide.pdf'
import connection12 from '../../../downloads/connections/Trustmark.pdf'
import connection13 from '../../../downloads/connections/UCD Connection Guide 8-22-2022.pdf'
import connection14 from '../../../downloads/connections/unum connection guide.pdf'

import employee1 from '../../../downloads/employeeExperience/Beneficiaries.pdf'
import employee2 from '../../../downloads/employeeExperience/Employee Add Document.pdf'
import employee3 from '../../../downloads/employeeExperience/Employee Add QLE.pdf'
import employee4 from '../../../downloads/employeeExperience/Employee Change Non-QLE Benefits.pdf'
import employee5 from '../../../downloads/employeeExperience/Employee EaseHR Experience.pdf'
import employee6 from '../../../downloads/employeeExperience/Employee Enrollment at a Glance SP (1).pdf'
import employee7 from '../../../downloads/employeeExperience/Employee Enrollment Experience.pdf'
import employee8 from '../../../downloads/employeeExperience/Employee Navigate Your Dashboard.pdf'
import employee9 from '../../../downloads/employeeExperience/Enrollment Summary (1).pdf'
import employee10 from '../../../downloads/employeeExperience/Health Questionnaire.pdf'
import employee11 from '../../../downloads/employeeExperience/Personal Profile.pdf'
import employee12 from '../../../downloads/employeeExperience/Reset Locked User Account.pdf'
import employee13 from '../../../downloads/employeeExperience/Reset User Password.pdf'

import new1 from '../../../downloads/newUserGuides/Add Employee.pdf'
import new2 from '../../../downloads/newUserGuides/Add Employment Details.pdf'
import new3 from '../../../downloads/newUserGuides/Email Templates (Multiple Guides).pdf'
import new4 from '../../../downloads/newUserGuides/Employee Enrollment at a Glance.pdf'
import new5 from '../../../downloads/newUserGuides/Employee Enrollment Experience.pdf'
import new6 from '../../../downloads/newUserGuides/Employee Unable to Log In.pdf'
import new7 from '../../../downloads/newUserGuides/FAQ.pdf'
import new8 from '../../../downloads/newUserGuides/Maintaining Company Site.pdf'
import new9 from '../../../downloads/newUserGuides/Navigate Companies.pdf'
import new10 from '../../../downloads/newUserGuides/Navigate Libraries.pdf'
import new11 from '../../../downloads/newUserGuides/Navigate Your Broker Portal.pdf'
import new12 from '../../../downloads/newUserGuides/Qualifying_Events_Picture.pdf'
import new13 from '../../../downloads/newUserGuides/Qualifying_Events.pdf'
import new14 from '../../../downloads/newUserGuides/Rehire Employee.pdf'
import new15 from '../../../downloads/newUserGuides/Reinstate Employee Benefits.pdf'
import new16 from '../../../downloads/newUserGuides/Reports.pdf'
import new17 from '../../../downloads/newUserGuides/Setting Up a Connection.pdf'
import new18 from '../../../downloads/newUserGuides/Terminate Employee Benefits.pdf'
import new19 from '../../../downloads/newUserGuides/Terminate Employee.pdf'

import payroll1 from '../../../downloads/payroll/BenefitMall PayFocus Pro Guide.pdf'
import payroll2 from '../../../downloads/payroll/Customer Paylocity SOW - SAMPLE.pdf'
import payroll3 from '../../../downloads/payroll/Paylocity Guide.pdf'
import payroll4 from '../../../downloads/payroll/TRAXPayroll Guide.pdf'

import resources1 from '../../../downloads/resources/Ease_Custom_Rate_Import_All (3).csv'
import resources2 from '../../../downloads/resources/Ease_Custom_Rate_Import_Table (3).csv'
import resources3 from '../../../downloads/resources/Ease_Custom_Rate_Import_Tier.csv'
import resources4 from '../../../downloads/resources/Ease_Custom_Rate_Import_TierTable (1).csv'
import resources5 from '../../../downloads/resources/groupTrainingGuide.pdf'
import resources6 from '../../../downloads/resources/Universal Form Example.pdf'

export default function Downloads() {




  return (
    <>
          <p3 is="custom">Documents available for download have been divided into sections. If you are unable to find a document, please submit a support ticket requesting the document to be added.</p3>
          <p3 is="custom">PDFs will open in the browser. All other files will be automatically download.</p3>
          <p3 is='custom' />
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          label='Admin Resources'
          select
          >
            <MenuItem value='Add Employee'><a href={Admin1} download='Add Employee.pdf' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Add Employee</a></MenuItem>
            <MenuItem value='Add Employment Details'><a href={Admin2} download='Add Employee.pdf' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Add Employment Details</a></MenuItem>
            <MenuItem value='Company Admin Checklist'><a href={Admin3} download='Add Employee.pdf' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Company Admin Checklist</a></MenuItem>
            <MenuItem value='Email Templates (Multiple Guides)'><a href={Admin4} download='Add Employee.pdf' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Email Templates (Multiple Guides)</a></MenuItem>
            <MenuItem value='Employee Unable to Log In'><a href={Admin5} download='Add Employee.pdf' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Employee Unable to Log In</a></MenuItem>
            <MenuItem value='Qualifying_Events_Picture'><a href={Admin6} download='Add Employee.pdf' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Qualifying_Events_Picture</a></MenuItem>
            <MenuItem value='Qualifying_Events'><a href={Admin7} download='Add Employee.pdf' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Qualifying_Events</a></MenuItem>
            <MenuItem value='Rehire Employee'><a href={Admin8} download='Add Employee.pdf' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Rehire Employee</a></MenuItem>
            <MenuItem value='Reports'><a href={Admin9} download='Add Employee.pdf' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Reports</a></MenuItem>
            <MenuItem value='Terminate Employee Benefits'><a href={Admin10} download='Add Employee.pdf' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Terminate Employee Benefits</a></MenuItem>
            <MenuItem value='Terminate Employee'><a href={Admin11} download='Add Employee.pdf' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Terminate Employee</a></MenuItem>
            <MenuItem value='Why Enroll Online Guide'><a href={Admin12} download='Add Employee.pdf' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Why Enroll Online Guide</a></MenuItem>
          </TextField>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          label='Carrier Connection Guides'
          select
          >
            <MenuItem value='EaseConnect_834_Broker_Guide'><a href={connection1} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>EaseConnect_834_Broker_Guide</a></MenuItem>
            <MenuItem value='Equitable Connection Guide 2-24-22'><a href={connection2} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Equitable Connection Guide 2-24-22</a></MenuItem>
            <MenuItem value='FL-EC_EC+ Comparison_071322'><a href={connection3} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>FL-EC_EC+ Comparison_071322</a></MenuItem>
            <MenuItem value='HealthPartners Integration Guide'><a href={connection4} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>HealthPartners Integration Guide</a></MenuItem>
            <MenuItem value='LFG Privacy Notice'><a href={connection5} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>LFG Privacy Notice</a></MenuItem>
            <MenuItem value='Lincoln Auth Form'><a href={connection6} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Lincoln Auth Form</a></MenuItem>
            <MenuItem value='ManhattanLife Connection Guide 2-24-22'><a href={connection7} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>ManhattanLife Connection Guide 2-24-22</a></MenuItem>
            <MenuItem value='MetLife Broker Connection Request Form'><a href={connection8} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>MetLife Broker Connection Request Form</a></MenuItem>
            <MenuItem value='Principal Broker Platform Agreement'><a href={connection9} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Principal Broker Platform Agreement</a></MenuItem>
            <MenuItem value='RSL Ease Self-Billing Job Aid Final'><a href={connection10} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>RSL Ease Self-Billing Job Aid Final</a></MenuItem>
            <MenuItem value='Transamerica Connection Guide'><a href={connection11} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Transamerica Connection Guide</a></MenuItem>
            <MenuItem value='Trustmark'><a href={connection12} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Trustmark</a></MenuItem>
            <MenuItem value='UCD Connection Guide 8-22-2022'><a href={connection13} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>UCD Connection Guide 8-22-2022</a></MenuItem>
            <MenuItem value='unum connection guide'><a href={connection14} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>unum connection guide</a></MenuItem>
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
            <MenuItem value='Beneficiaries'><a href={employee1} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Beneficiaries</a></MenuItem>
            <MenuItem value='Employee Add Document'><a href={employee2} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Employee Add Document</a></MenuItem>
            <MenuItem value='Employee Add QLE'><a href={employee3} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Employee Add QLE</a></MenuItem>
            <MenuItem value='Employee Change Non-QLE Benefits'><a href={employee4} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Employee Change Non-QLE Benefits</a></MenuItem>
            <MenuItem value='Employee EaseHR Experience'><a href={employee5} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Employee EaseHR Experience</a></MenuItem>
            <MenuItem value='Employee Enrollment at a Glance SP'><a href={employee6} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Employee Enrollment at a Glance SP</a></MenuItem>
            <MenuItem value='Employee Enrollment Experience'><a href={employee7} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Employee Enrollment Experience</a></MenuItem>
            <MenuItem value='Employee Navigate Your Dashboard'><a href={employee8} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Employee Navigate Your Dashboard</a></MenuItem>
            <MenuItem value='Enrollment Summary'><a href={employee9} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Enrollment Summary</a></MenuItem>
            <MenuItem value='Health Questionnaire'><a href={employee10} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Health Questionnaire</a></MenuItem>
            <MenuItem value='Personal Profile'><a href={employee11} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Personal Profile</a></MenuItem>
            <MenuItem value='Reset Locked User Account'><a href={employee12} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Reset Locked User Account</a></MenuItem>
            <MenuItem value='Reset User Password'><a href={employee13} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Reset User Password</a></MenuItem>
          </TextField>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          label='Broker User Guides'
          select
          >
            <MenuItem value='Add Employee'><a href={new1} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Add Employee</a></MenuItem>
            <MenuItem value='Add Employment Details'><a href={new2} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Add Employment Details</a></MenuItem>
            <MenuItem value='Email Templates (Multiple Guides)'><a href={new3} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Email Templates (Multiple Guides)</a></MenuItem>
            <MenuItem value='Employee Enrollment at a Glance'><a href={new4} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Employee Enrollment at a Glance</a></MenuItem>
            <MenuItem value='Employee Enrollment Experience'><a href={new5} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Employee Enrollment Experience</a></MenuItem>
            <MenuItem value='Employee Unable to Log In'><a href={new6} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Employee Unable to Log In</a></MenuItem>
            <MenuItem value='FAQ'><a href={new7} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>FAQ</a></MenuItem>
            <MenuItem value='Maintaining Company Site'><a href={new8} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Maintaining Company Site</a></MenuItem>
            <MenuItem value='Navigate Companies'><a href={new9} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Navigate Companies</a></MenuItem>
            <MenuItem value='Navigate Libraries'><a href={new10} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Navigate Libraries</a></MenuItem>
            <MenuItem value='Navigate Your Broker Portal'><a href={new11} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Navigate Your Broker Portal</a></MenuItem>
            <MenuItem value='Qualifying_Events_Picture'><a href={new12} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Qualifying_Events_Picture</a></MenuItem>
            <MenuItem value='Qualifying_Events'><a href={new13} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Qualifying_Events</a></MenuItem>
            <MenuItem value='Rehire Employee'><a href={new14} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Rehire Employee</a></MenuItem>
            <MenuItem value='Reinstate Employee Benefits'><a href={new15} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Reinstate Employee Benefits</a></MenuItem>
            <MenuItem value='Reports'><a href={new16} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Reports</a></MenuItem>
            <MenuItem value='Setting Up a Connection'><a href={new17} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Setting Up a Connection</a></MenuItem>
            <MenuItem value='Terminate Employee Benefits'><a href={new18} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Terminate Employee Benefits</a></MenuItem>
            <MenuItem value='Terminate Employee'><a href={new19} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Terminate Employee</a></MenuItem>
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
            <MenuItem value='BenefitMall PayFocus Pro Guide'><a href={payroll1} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>BenefitMall PayFocus Pro Guide</a></MenuItem>
            <MenuItem value='Customer Paylocity SOW - SAMPLE'><a href={payroll2} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Customer Paylocity SOW - SAMPLE</a></MenuItem>
            <MenuItem value='Paylocity Guide'><a href={payroll3} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Paylocity Guide</a></MenuItem>
            <MenuItem value='TRAXPayroll Guide'><a href={payroll4} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>TRAXPayroll Guide</a></MenuItem>
          </TextField>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          label='Additional Documents'
          select
          >
            <MenuItem value='Ease_Custom_Rate_Import_All'><a href={resources1} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Ease_Custom_Rate_Import_All</a></MenuItem>
            <MenuItem value='Ease_Custom_Rate_Import_Table'><a href={resources2} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Ease_Custom_Rate_Import_Table</a></MenuItem>
            <MenuItem value='Ease_Custom_Rate_Import_Tier'><a href={resources3} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Ease_Custom_Rate_Import_Tier</a></MenuItem>
            <MenuItem value='Ease_Custom_Rate_Import_TierTable'><a href={resources4} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Ease_Custom_Rate_Import_TierTable</a></MenuItem>
            <MenuItem value='Group Training Guide'><a href={resources5} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Group Training Guide</a></MenuItem>
            <MenuItem value='Universal Form Example'><a href={resources6} download='' style={{textDecoration: 'none', color: 'rgba(0,0,0,0.8)'}}>Universal Form Example</a></MenuItem>
          </TextField>
          </div>
    </>
  )
}
