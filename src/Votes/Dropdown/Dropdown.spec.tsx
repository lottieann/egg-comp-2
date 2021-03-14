import * as React from 'react'

import 'jest-styled-components'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Dropdown } from './Dropdown'

const mockProps = {
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

const setup = () => {
  return <Dropdown options={mockProps.options} label="label"/>
}

describe('Dropdown', () => {
  it('should render Dropdown correctly', () => {
    const { container } = render(setup())
    expect(container).toMatchSnapshot()
  })
})