import Link from 'next/link'
import * as React from 'react'

import styled from 'styled-components'
import { PhotoCarousel } from './PhotoCarousel'

export interface PhotoGalleryProps {
  entries: any,
  entryIndex: any
}

const Container = styled.div`
  margin-left: 200px;
  display: flex;
  flex-direction: column;
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-family: Helvetica;
  font-size: 30px;
`

const StyledAnchor = styled.a`
  text-decoration: none;
  cursor: pointer;
`

export const PhotoGallery = (props: PhotoGalleryProps) => {
  const index = parseInt(props.entryIndex.entry)
  return (
    <Container>
      <TitleWrapper>
        <Link href="/gallery">
          <StyledAnchor>Return to Gallery</StyledAnchor>
        </Link>
        <Title>Entry {props.entries[index]['entryNumber']}</Title>
      </TitleWrapper>
      <PhotoCarousel photoInfo={props.entries[index]} />
    </Container>
  )
}
