import * as React from 'react'

import { NavBar } from '../src/NavBar'
import { SubmitEntry } from '../src/SubmitEntry'

const Submit = () => {
  return (
    <React.Fragment>
      <NavBar currentPage="Submit" />
      <SubmitEntry />
    </React.Fragment>
  )
}

export default Submit
