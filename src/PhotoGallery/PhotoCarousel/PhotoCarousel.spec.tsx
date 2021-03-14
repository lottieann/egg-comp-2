import * as React from 'react'

import 'jest-styled-components'

import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { PhotoCarousel, PhotoCarouselProps } from './PhotoCarousel'

afterEach(cleanup)

const photoInfo = {
  entryName: 'Test Entry',
  entryNumber: 0,
  photo1: '/0.jpg',
  photo2: '/1.jpg',
  photo3: '/3.jpg',
  vote1: '',
  vote2: '',
  vote4: '',
  vote3: '',
  vote5: '',
}

const setup = (props: PhotoCarouselProps) => {
  return <PhotoCarousel {...props}/>
}

describe('PhotoCarousel', () => {
  it('should increase photo index when next button is clicked', () => {
    const { getByTestId } = render(setup({
      photoInfo
    }))
    expect(getByTestId('image-0')).toBeInTheDocument()
    fireEvent.click(getByTestId('next-button'))
    expect(getByTestId('image-1')).toBeInTheDocument()
  })
  it('should not increase photo index when maximum is reached', () => {
    const { getByTestId } = render(setup({
      photoInfo
    }))
    expect(getByTestId('image-0')).toBeInTheDocument()
    fireEvent.click(getByTestId('next-button'))
    fireEvent.click(getByTestId('next-button'))
 
    expect(getByTestId("next-button-space")).toBeInTheDocument()
    expect(getByTestId('image-2')).toBeInTheDocument()
  })
  it.skip('should decrease photo index when previous button is clicked', () => {
    const { getByTestId } = render(setup({
      photoInfo
    }))
    expect(getByTestId('image-1')).toBeInTheDocument()
    fireEvent.click(getByTestId('previous-button'))
    expect(getByTestId('image-0')).toBeInTheDocument()
  })
  it.skip('should not decrease photo index when minimum is reached', () => {
    const { getByTestId } = render(setup({
      photoInfo
    }))
    expect(getByTestId('image-1')).toBeInTheDocument()
    fireEvent.click(getByTestId('previous-button'))
 
    expect(getByTestId("previous-button-space")).toBeInTheDocument()
    expect(getByTestId('image-0')).toBeInTheDocument()
  })
  it('should render PhotoCarousel correctly', () => {
    const { container } = render(setup({
      photoInfo
    }))
    expect(container).toMatchSnapshot()
  })
})
