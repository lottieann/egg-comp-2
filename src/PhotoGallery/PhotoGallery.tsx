import * as React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import styled from 'styled-components'

export interface PhotoGalleryProps {
  entryNumber: number;
  title: string;
  thumbnail: string;
  photo1?: string;
  photo2?: string;
  photo3?: string;
  videoLink?: string;
}

const Container = styled.div`
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
font-family: Helvetica;
  text-decoration: none;
  cursor: pointer;
  margin-top: 2vh;
`

const PhotoContainer = styled.div`
  dispaly: flex;
  flex-directon: column;
  justify-content: center;
  align-items: center;
`

const PhotoWrapper = styled.div`
  height: 60vh;
  width: 90vh;
  margin: 5vh;
`

const VideoWrapper = styled.div`
  height: 60vh;
  width: 90vh;
  margin: 5vh;
`

export const PhotoGallery = (props: PhotoGalleryProps) => {
  console.log(props.photo1)
  const getPhoto = (photoSrc: string) => {
    return (
      <PhotoWrapper>
        <Image
          src={`/images/${photoSrc}.jpg`}
          alt={`${props.title}`}
          width={900}
          height={600}
        />
      </PhotoWrapper>
    )
  }

  return (
    <Container>
      <TitleWrapper>
        <Link href="/gallery">
          <StyledAnchor>Return to Gallery</StyledAnchor>
        </Link>
        <Title>{props.title}</Title>
      </TitleWrapper>
      <PhotoContainer>
        {props.photo1 && getPhoto(props.photo1)}
        {props.photo2 && getPhoto(props.photo2)}
        {props.photo3 && getPhoto(props.photo3)}
        {props.videoLink && (
          <VideoWrapper>
            <iframe src={props.videoLink} height="412" width="618"></iframe>
          </VideoWrapper>
        )}
      </PhotoContainer>
    </Container>
  )
}
