import * as React from 'react'

import { NavBar } from '../src/NavBar'
import { Timings } from '../src/Timings'

const Schedule = () => {
  return (
    <React.Fragment>
      <NavBar currentPage="Schedule" />
      <Timings />
    </React.Fragment>
  )
}

export default Schedule
