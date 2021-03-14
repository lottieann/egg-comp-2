import * as React from 'react'

import styled from 'styled-components'

const Container = styled.div`
margin-top: 15vh;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`

const MessageWrapper = styled.div`
  width: 50vw;
`

const Message = styled.p`
font-family: Helvetica,
font-size: 16px;
background-color: rgba(255, 255, 255, 0.7);
padding: 20px;`

const Prerequisites = styled.ul``

const ListItem = styled.li``

const Email = styled.p`
  display: flex;
  font-weight: bold;
  font-size: 18px;
  justify-content: center;
`

export const SubmitEntry = () => {
  return (
    <Container data-testid="submit-entry-container">
      <MessageWrapper>
        <Message>
          Egg entry photos and videos to be submitted by <b>3pm Good Friday</b>.
          {'\n'}
          <Prerequisites>
            <ListItem>
              Photos and videos must be <b>portrait</b>
            </ListItem>
            <ListItem>
              Only a total of 3 photos and videos, e.g. 1 video &#38; 2 photos
              OR 3 photos
            </ListItem>
            <ListItem>Repeat entries will be disqualified</ListItem>
            <ListItem>Katie Bradley you are banned</ListItem>
          </Prerequisites>
          Please submit your entries, clearly stating who has entered which egg,
          to:
          <Email>eastereggcompetition@gmail.com</Email>
          Please return to this website on Easter Saturday to view and vote for
          your favourite entries.
        </Message>
      </MessageWrapper>
    </Container>
  )
}
