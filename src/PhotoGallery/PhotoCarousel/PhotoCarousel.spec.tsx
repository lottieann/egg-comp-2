import * as React from 'react'

import 'jest-styled-components'

import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { PhotoCarousel } from './PhotoCarousel'

afterEach(cleanup)


const setup = () => {
  return <PhotoCarousel/>
}

const images = [
  '/tigerKing.jpg',
  '/feathers.jpg',
  '/plane.jpg',
  '/beautySalon.jpg',
  '/grenade.jpg',
  '/eggcalibur.jpg',
  '/boot.jpg',
]

describe('PhotoCarousel', () => {
  it('should increase photo index when next button is clicked', () => {
    const { getByTestId } = render(setup())
    expect(getByTestId('image-0')).toBeInTheDocument()
    fireEvent.click(getByTestId('next-button'))
    expect(getByTestId('image-1')).toBeInTheDocument()
  })
  it.skip('should not increase photo index when maximum is reached', () => {
    const { getByTestId } = render(setup())
    expect(getByTestId('image-0')).toBeInTheDocument()
    fireEvent.click(getByTestId('next-button'))
    fireEvent.click(getByTestId('next-button'))

    expect(getByTestId('next-button-space')).toBeInTheDocument()
    expect(getByTestId('image-2')).toBeInTheDocument()
  })
  it.skip('should decrease photo index when previous button is clicked', () => {
    const { getByTestId } = render(setup())
    expect(getByTestId('image-1')).toBeInTheDocument()
    fireEvent.click(getByTestId('previous-button'))
    expect(getByTestId('image-0')).toBeInTheDocument()
  })
  it.skip('should not decrease photo index when minimum is reached', () => {
    const { getByTestId } = render(setup())
    expect(getByTestId('image-1')).toBeInTheDocument()
    fireEvent.click(getByTestId('previous-button'))

    expect(getByTestId('previous-button-space')).toBeInTheDocument()
    expect(getByTestId('image-0')).toBeInTheDocument()
  })
  it('should render PhotoCarousel correctly', () => {
    const { container } = render(setup())
    expect(container).toMatchSnapshot()
  })
})
