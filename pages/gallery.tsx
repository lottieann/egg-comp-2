import * as React from 'react'

import { NavBar } from '../src/NavBar'
import { Entries } from '../src/Entries'



const Gallery = () => {
 const entries = require('./entries.json')

  return (
    <React.Fragment>
      <NavBar currentPage="Gallery" />
      <Entries entries={entries}/>

    </React.Fragment>
  )
}

export default Gallery
