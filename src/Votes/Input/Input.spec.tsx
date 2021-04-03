import * as React from 'react'

import 'jest-styled-components'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Input, InputProps } from './Input'

const setup = (props: InputProps) => {
  return <Input {...props} />
}

describe('Input', () => {
  it('should render Input correctly', () => {
    const { container } = render(
      setup({
        label: 'name',
        placeholder: 'Enter your name',
        type: 'text',
      }),
    )
    expect(container).toMatchSnapshot()
  })
})
