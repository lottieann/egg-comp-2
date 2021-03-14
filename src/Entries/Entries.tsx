import * as React from 'react'

import styled from 'styled-components'

import Image from 'next/image'
import Link from 'next/link'

export interface EntriesProps {
  entries: any
}

const Container = styled.div`
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const EntryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`

const EntryContaier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

const EntryPhoto = styled.div`
  height: 150px;
  width: 150px;
  background-color: lightgray;
  border: 2px solid gray;
`

const StyledImage = styled(Image)``

const StyledAnchor = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-family: Helvetica;
  cursor: pointer;
`

export const Entries = (props: EntriesProps) => {
  const [imageError, setImageError] = React.useState(false)
  const makeEntriesList = (options) => {
    return (
      <EntryList>
        {options.map((el, index) => {
          return (
            <EntryContaier key={index}>
              {imageError ? (
                <EntryPhoto />
              ) : (
                <StyledImage
                  data-testid={`image-${index}`}
                  src={`/${el.photo1}`}
                  alt={`egg-${index}`}
                  width={250}
                  height={250}
                  onError={() => setImageError(true)}
                />
              )}
              <Link href={`/entries/${index}`}>
                <StyledAnchor>{el.entryNumber}</StyledAnchor>
              </Link>
            </EntryContaier>
          )
        })}
      </EntryList>
    )
  }

  return (
    <Container>
      <h1>Select an entry to view</h1>
      <ul>{makeEntriesList(props.entries)}</ul>
    </Container>
  )
}
