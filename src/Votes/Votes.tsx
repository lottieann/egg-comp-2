import * as React from 'react'

import styled from 'styled-components'

import { Dropdown } from './Dropdown'

const Container = styled.div`
  margin-top: 15vh;
`

export const Votes = () => {
  const images: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const labels = [
    'My favourite',
    'I loved this',
    'This too',
    'I thought this was good',
    'Okay, I guess...',
  ]

  return (
    <React.Fragment>
      <Container>
        <p>
          You get <b>5</b> votes, use them wisely!
        </p>

        <form >
          {labels.map((label, index) => {
            return <Dropdown options={images} data-testid="" label={label} key={index} />
          })}

          <input type="submit" />
        </form>
      </Container>
    </React.Fragment>
  )
}
