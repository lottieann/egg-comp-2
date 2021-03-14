import * as React from 'react'

import 'jest-styled-components'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Timings } from './Timings'

const setup = () => {
  return <Timings />
}

describe('Timings', () => {
  it('should render Timings correctly', () => {
    const { container } = render(setup())
    expect(container).toMatchSnapshot()
  })
})
