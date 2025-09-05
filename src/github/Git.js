import React from 'react'
import { Link } from 'react-router-dom'

function Git() {
  return (
    <div>
        <h1>todays task</h1>
    <div id='main'>
        <Link to='/bhava'><button type='button'>bhavanarayana</button></Link>
        <Link to='/mahalakshmi'><button type='button'>mahalakshmi</button></Link>
        <Link to='/venkat'><button type='button'>venkat</button></Link>
      
    </div>
    </div>
  )
}

export default Git
