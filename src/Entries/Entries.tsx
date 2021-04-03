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
    additional?:string;
  }
}

const Container = styled.div`
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: Helvetica;
  }
`

const EntryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`

const EntryContainer = styled.div`
  margin: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  p {
    font-family: Helvetica;
    font-weight: bold;
  }
`


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
             //@ts-ignore
            el.entryNumber !== 0 &&
            <EntryContainer key={index}>
                <Link href={`/entries/${index}`} key={index}>
                  <Image
                    data-testid={`image-${index}`}
                    //@ts-ignore
                    src={`/images/${el.thumbnail}.jpg`}
                    alt={`egg-${index}`}
                    width={400}
                    height={265}
                  />
                </Link>
              <Link href={`/entries/${index}`}>
              {/* @ts-ignore */}
                <StyledAnchor key={index}>{el.entryNumber}</StyledAnchor>
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
