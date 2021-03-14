import * as React from 'react'

import { Entries } from '../src/Entries'
import { NavBar } from '../src/NavBar'

import { eggCompetition } from '../egg-competition.json'

const Gallery = () => {
  return (
    <React.Fragment>
      <NavBar currentPage="Gallery"/>
      <Entries entries={eggCompetition} />
    </React.Fragment>
  )
}


export default Gallery
