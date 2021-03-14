import * as React from 'react'

import styled from 'styled-components'

const HomePageContainer = styled.div`
  margin-top: 15vh;
  display: flex;
  justidy-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap');
  font-family: "Balsamiq Sans", Helvetica;
  font-size: 21px;
  color: black;
`

export const HomePage = () => {
  return (
    <HomePageContainer data-testid="homepage-background">
      <StyledTitle>Welcome to Easter Egg Competition 2021</StyledTitle>
    </HomePageContainer>
  )
}
