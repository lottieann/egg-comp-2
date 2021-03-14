import * as React from 'react'

import 'jest-styled-components'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { PhotoGallery, PhotoGalleryProps } from './PhotoGallery'

const entries = [
  {
    entryName: 'Test Entry',
    entryNumber: 0,
    photo1: 'egg-comp-app/public/0.jpg',
    photo2: 'egg-comp-app/public/1.jpg',
    photo3: 'egg-comp-app/public/3.jpg',
    vote1: '',
    vote2: '',
    vote4: '',
    vote3: '',
    vote5: '',
  },
  {
    entryName: 'Test Entry 1',
    entryNumber: 1,
    photo1: 'egg-comp-app/public/0.jpg',
    photo2: 'egg-comp-app/public/1.jpg',
    photo3: 'egg-comp-app/public/3.jpg',
    vote1: '',
    vote2: '',
    vote4: '',
    vote3: '',
    vote5: '',
  },
  {
    entryName: 'Test Entry 2',
    entryNumber: 2,
    photo1: 'egg-comp-app/public/0.jpg',
    photo2: 'egg-comp-app/public/1.jpg',
    photo3: 'egg-comp-app/public/3.jpg',
    vote1: '',
    vote2: '',
    vote4: '',
    vote3: '',
    vote5: '',
  },
]

const setup = (props: PhotoGalleryProps) => {
  return <PhotoGallery {...props} />
}

describe('PhotoGallery', () => {
  it('should render PhotoGallery correctly', () => {
    const { container } = render(
      setup({
        entries,
        entryIndex: {
          "entry": "1"
        },
      }),
    )
    expect(container).toMatchSnapshot()
  })
})
