import * as React from 'react'

import styled from 'styled-components'

import Image from 'next/image'
import Link from 'next/link'

import { Entry } from '../types'

export interface EntriesProps {
  entries: {
    entryNumber: number;
    title: string;
    thumbnail: string;
    photo1?: string;
    photo2?: string;
    photo3?: string;
    videoLink?: string;
  }
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

  p {
    font-family: Helvetica;
  }
`

const EntryPhoto = styled.div`
  height: 150px;
  width: 225px;
  background-color: lightgray;
  border: 2px solid gray;
`

const StyledImage = styled(Image)``

const StyledAnchor = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-family: Helvetica;
  cursor: pointer;
  padding: 2vh;
`

export const Entries = (props: EntriesProps) => {
  const [imageError, setImageError] = React.useState(false)

  const makeEntriesList = (options: Entry) => {
    return (
      <EntryList>
        {Object.values(options).map((el, index) => {
          console.log('el', (el.title))
          return (
            <EntryContaier key={index}>
              {imageError ? (
                <EntryPhoto />
              ) : (
                <Link href={`/entries/${index}`}>
                  <StyledImage
                    data-testid={`image-${index}`}
                    src={`/${el.thumbnail}`}
                    alt={`egg-${index}`}
                    width={250}
                    height={250}
                    onError={() => setImageError(true)}
                  />
                </Link>
              )}
              <Link href={`/entries/${index}`}>
                <StyledAnchor>{el.entryNumber}</StyledAnchor>
              </Link>
              <p>{el.title}</p>
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
