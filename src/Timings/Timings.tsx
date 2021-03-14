import Link from 'next/link'
import * as React from 'react'

import styled from 'styled-components'

const Container = styled.div`
  margin-top: 20vh;

  p {
    font-family: Helvetica;
    text-align: center;
  }
`

export const Timings = () => {
  return (
    <Container>
      <p>
        Entries submitted by 6pm Good Friday, see{' '}
        <b>
          <Link href="/submit">submit page</Link>
        </b>
        .
      </p>
      <p>Gallery and voting available from Easter Saturday AM.</p>
      <p>Voting closes 6pm Easter Saturday</p>
      <p>Winners to be announced on Zoom at Easter Sunday noon GMT.</p>
    </Container>
  )
}
