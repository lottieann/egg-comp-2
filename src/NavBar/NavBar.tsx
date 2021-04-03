import * as React from 'react'

import Link from 'next/link'

import styled from 'styled-components'

export interface NavBarProps {
  currentPage: string
}

const StyledContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(205, 202, 202, 0.3);
  width: 100vw;
  height: 15vh;
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
`

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  margin: 10px;
  padding: 0;
  width: 45vw;

  @media screen and (max-width: 600px) {
    width: 100vw;
  }
`
const StyledListItem = styled.li`
  padding: 15px;
`
const StyledAnchor = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    font-weight: 900;
  }

  ${(props: { currentPage: boolean }) =>
    props.currentPage ? 'text-decoration: underline;' : null}
`

export const NavBar = (props: NavBarProps) => {
  return (
    <StyledContainer>
      <StyledList>
        <StyledListItem>
          <Link href="/">
            <StyledAnchor
              data-testid="homepage-link"
              currentPage={props.currentPage === 'HomePage'}
            >
              Home
            </StyledAnchor>
          </Link>
        </StyledListItem>
        <StyledListItem>
          <Link href="/schedule">
            <StyledAnchor currentPage={props.currentPage === 'Schedule'}>
              Schedule
            </StyledAnchor>
          </Link>
        </StyledListItem>
        <StyledListItem>
          <Link href="/gallery">
            <StyledAnchor currentPage={props.currentPage === 'Gallery'}>
              Gallery
            </StyledAnchor>
          </Link>
        </StyledListItem>
      </StyledList>
    </StyledContainer>
  )
}
