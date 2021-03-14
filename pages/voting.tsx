import * as React from 'react'
import { HoldingPage } from '../src/HoldingPage'

import { NavBar } from '../src/NavBar'


const Voting = () => {
  return (
    <React.Fragment>
      <NavBar currentPage="Vote"/>
     <HoldingPage page="Votes" />
    </React.Fragment>
  )
}
export default Voting
