import * as React from 'react'

import { NavBar } from '../src/NavBar'
import { Votes } from '../src/Votes'

const Voting = () => {
  return (
    <React.Fragment>
      <NavBar currentPage="Vote" />
      <Votes />
    </React.Fragment>
  )
}
export default Voting
