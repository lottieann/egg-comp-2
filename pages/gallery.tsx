import * as React from 'react'

import { Entries } from '../src/Entries'
import { NavBar } from '../src/NavBar'

//import { eggCompetition } from '../egg-competition.json'

const Gallery = () => {
  return (
    <React.Fragment>
      <NavBar currentPage="Gallery"/>
      <Entries />
    </React.Fragment>
  )
}


export default Gallery
