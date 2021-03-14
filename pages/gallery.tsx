import * as React from 'react'

import { NavBar } from '../src/NavBar'
import { PhotoCarousel } from '../src/PhotoGallery/PhotoCarousel'

const Gallery = () => {
  return (
    <React.Fragment>
      <NavBar currentPage="Gallery" />
      <PhotoCarousel/>
    </React.Fragment>
  )
}

export default Gallery
