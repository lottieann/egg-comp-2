import * as React from 'react'

import 'jest-styled-components'

import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { HoldingPage, HoldingPageProps } from './HoldingPage'

const setup = (props: HoldingPageProps) => {
  return <HoldingPage {...props} />
}

describe('HoldingPage', () => {
  it('should render HoldingPage correctly on voting page', () => {
    const { container } = render(
      setup({
        page: 'Votes',
      }),
    )
    expect(container).toMatchSnapshot()
  })
  it('should render HoldingPage correctly on gallery page', () => {
    const { container } = render(
      setup({
        page: 'Entries',
      }),
    )
    expect(container).toMatchSnapshot()
  })
})
