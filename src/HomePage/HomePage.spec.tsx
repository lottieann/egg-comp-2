import * as React from 'react'

import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'
import { HomePage } from './HomePage'

const setup = () => {
  return <HomePage />
}

describe('HomePage', () => {
  it('should render homepage correctly', () => {
    const { container } = render(setup())

    expect(container).toMatchSnapshot()
  })
})
