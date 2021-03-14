import * as React from 'react'

import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'
import { SubmitEntry } from './SubmitEntry'

const setup = () => {
  return <SubmitEntry />
}

describe('SubmitEntry', () => {
  it('should render SubmitEntry correctly', () => {
    const { container } = render(setup())

    expect(container).toMatchSnapshot()
  })
})
