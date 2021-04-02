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

const PhotoContainer = styled.div`
  dispaly: flex;
  flex-directon: column;
  justify-content: center;
`

const PhotoWrapper = styled.div`
  height: 40vh;
  width: 60vh;
  margin: 5vh;
`

const VideoWrapper = styled.div`
  height: 40vh;
  width: 60vh;
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
          width={600}
          height={400}
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
        <Title>Entry {props.title}</Title>
      </TitleWrapper>
      <PhotoContainer>
        {props.photo1 && getPhoto(props.photo1)}
        {props.photo2 && getPhoto(props.photo2)}
        {props.photo3 && getPhoto(props.photo3)}
        {props.videoLink && (
          <VideoWrapper>
            <iframe src={props.videoLink} width="30vh" height="20vh"></iframe>
          </VideoWrapper>
        )}
      </PhotoContainer>
    </Container>
  )
}
