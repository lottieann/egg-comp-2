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

const EntryContainer = styled.div`
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
  
  const makeEntriesList = (options: Entry) => {
    return (
      <EntryList>
        {Object.values(options).map((el, index) => {
          return (
            <EntryContainer>
                <Link href={`/entries/${index}`}>
                  <StyledImage
                    data-testid={`image-${index}`}
                    //@ts-ignore
                    src={`/images/${el.thumbnail}.jpg`}
                    alt={`egg-${index}`}
                    width={225}
                    height={150}
                    
                  />
                </Link>
              <Link href={`/entries/${index}`}>
              {/* @ts-ignore */}
                <StyledAnchor>{el.entryNumber}</StyledAnchor>
              </Link>
              {/* @ts-ignore */}
              <p>{el.title}</p>
            </EntryContainer>
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
