import * as React from 'react'

import styled from 'styled-components'

const Container = styled.div`
  margin-top: 15vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Votes = () => {

  return (
    <Container>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdJKFyzMuUCj0dnoYSt-QUIgMlDnIWDuTno4cyZqPCjAme_kg/viewform?embedded=true"
        width="320"
        height="1515"
        frameBorder="0"
      >
        Loading…
      </iframe>
    </Container>
  )
}
