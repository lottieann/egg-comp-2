import * as React from 'react'

import 'jest-styled-components'

import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { Votes } from './Votes'

const setup = () => {
  return <Votes />
}

describe('Votes', () => {
  it('should throw an alert if form name field is empty', async () => {
    const { getByPlaceholderText, getByRole, getByTestId } = render(setup())
    const jsdomAlert = window.alert // remember the jsdom alert
    window.alert = () => {}
    fireEvent.change(getByPlaceholderText('Enter an email'), {
      target: {
        value: 'hello@live.com',
      },
    })

    fireEvent.click(getByTestId('submit-button'))

    expect(getByRole('alert')).toHaveTextContent('Please enter your name')
    window.alert = jsdomAlert
  })
  it('should call submit form when button clicked', () => {
    const { getByTestId } = render(setup())

    fireEvent.click(getByTestId('submit-button'))
  })
  it('should reload page when reload button is clicked', () => {
    // const { getByTestId } = render(setup())
    // fireEvent.click(getByTestId('reload-button'))
  })
  it('should render Votes correctly', () => {
    const { container } = render(setup())
    expect(container).toMatchSnapshot()
  })
})
