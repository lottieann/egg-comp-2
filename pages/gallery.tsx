import * as React from 'react'
import { HoldingPage } from '../src/HoldingPage'

import { NavBar } from '../src/NavBar'

const Gallery = () => {
  return (
    <React.Fragment>
      <NavBar currentPage="Gallery" />
      <HoldingPage page="Entries" />
    </React.Fragment>
  )
}

export default Gallery
