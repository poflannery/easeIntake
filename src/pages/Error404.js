import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', flexDirection:'column'}}>
      <h1>Uh oh... You made a wrong turn.</h1>  
      <h3>Click <Link to='/'>Here</Link> to return to the dashboard.</h3>
    </div>
  )
}
