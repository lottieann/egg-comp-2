import * as React from 'react'

import 'jest-styled-components'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Votes } from './Votes'

const setup = () => {
  return <Votes />
}

describe('Votes', () => {

  it('should render Votes correctly', () => {
    const { container } = render(setup())
    expect(container).toMatchSnapshot()
  })
})