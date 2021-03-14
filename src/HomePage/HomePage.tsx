import * as React from 'react'

import styled from 'styled-components'

const HomePageContainer = styled.div`
  display: flex;
  justidy-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-image: url('./BreakOut.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  background-color: #f2f2f2;
`

const StyledTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap');
  font-family: 'Balsamiq Sans', Helvetica;
  font-size: 21px;
  color: black;
  margin-top: 15vh;
`

export const HomePage = () => {
  return (
    <HomePageContainer data-testid="homepage-background">
      <StyledTitle>Welcome to Easter Egg Competition 2021</StyledTitle>
    </HomePageContainer>
  )
}
