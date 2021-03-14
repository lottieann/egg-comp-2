import * as React from 'react'

import styled from 'styled-components'

const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-image: url('./BreakOut.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  background-color: #f2f2f2;

  @media screen and (max-width: 600px) {
    background-size: cover;
  }
`
const WelcomeWrapper = styled.div`
  margin-top: 15vh;
`

const StyledTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap');
  font-family: 'Balsamiq Sans', Helvetica;
  font-size: 21px;
  color: black;
  text-align: center;
`

export const HomePage = () => {
  return (
    <HomePageContainer data-testid="homepage-background">
      <WelcomeWrapper>
        <StyledTitle>Welcome to Easter Egg Competition 2021</StyledTitle>
      </WelcomeWrapper>
    </HomePageContainer>
  )
}
