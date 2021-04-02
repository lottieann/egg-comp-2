import * as React from 'react'

import { useRouter } from 'next/router'

import { NavBar } from '../../src/NavBar'
import { PhotoGallery } from '../../src/PhotoGallery'

const Gallery = () => {
  const data = require('../entries.json')
  const router = useRouter()
  const { id } = router.query

  const entries = Object.values(data)

  const entry = entries[`${id}`]

  return (
    <React.Fragment>
      <NavBar currentPage="Gallery" />
      {entry && (
        <PhotoGallery
          entryNumber={entry.entryNumber}
          title={entry.title}
          thumbnail={entry.thumbnail}
          photo1={entry.photo1}
          photo2={entry.photo2}
          photo3={entry.photo3}
          videoLink={entry.videoLink}
        />
      )}
    </React.Fragment>
  )
}

export default Gallery
