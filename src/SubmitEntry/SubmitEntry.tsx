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

  @media screen and (max-width: 600px) {
    width: 100vw;
  }
`

const Message = styled.p`
  font-family: Helvetica;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  line-height: 150%;
`

const Prerequisites = styled.ul`
  padding-left: 20px;
`

const ListItem = styled.li`
  margin: 0;
`

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
          Please submit your entries by <b>3pm Good Friday</b>, stating who has
          entered which egg, to:
          {'\n'}
          <Email>eastereggcompetition@gmail.com</Email>
          <Prerequisites>
            <ListItem>
              Photos and videos must be <b>landscape</b>
            </ListItem>
            <ListItem>
              Only a total of 3 photos and videos, e.g. 1 video &#38; 2 photos
              OR 3 photos
            </ListItem>
            <ListItem>Repeat entries will be disqualified</ListItem>
          </Prerequisites>
          Voting to take place on Easter Sunday morning. Entries will be
          available for viewing from Saturday Morning. There are 5 votes per
          person.
          {'\n'}
          The winner will be announced <b>12 noon Easter Sunday</b>
        </Message>
      </MessageWrapper>
    </Container>
  )
}
