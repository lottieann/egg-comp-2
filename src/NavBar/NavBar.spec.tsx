import * as React from 'react'

import 'jest-styled-components'

import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { NavBar, NavBarProps } from './NavBar'

const setup = (props: NavBarProps) => {
  return <NavBar {...props} />
}

describe('NavBar', () => {
  it.skip('should redirect to correct link', () => {
    const { getByTestId } = render(
      setup({
        currentPage: 'HomePage',
      }),
    )
    fireEvent.click(getByTestId('homepage-link'))
    const target = 'http://localhost/'
    expect(window.location.href).toBe(target)

  })
  it('should render NavBar correctly', () => {
    const { container } = render(
      setup({
        currentPage: 'HomePage',
      }),
    )
    expect(container).toMatchSnapshot()
  })
})
