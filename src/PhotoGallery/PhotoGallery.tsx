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
  additional?: string;
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
  text-align: center;
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
  position: relative;
  height: auto;
  width: auto;
  margin: 20px;

  @media screen and (max-width: 600px) {
    width: 90vw;
    margin: 20px;
  }
`

const VideoWrapper = styled.div`
  position: relative;
  width: 90vw;
  margin: 20px;

  @media screen and (max-width: 600px) {
    height: 60vh;
    width: 90vw;
    margin: 20px;
  }
`

export const PhotoGallery = (props: PhotoGalleryProps) => {
  const getPhoto = (photoSrc: string) => {
    return (
      <PhotoWrapper>
        <Image
          src={`/images/${photoSrc}.jpg`}
          alt={`${props.title}`}
          height={600}
          width={800}
          layout="intrinsic"
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
      {props.title === "Jail Eggsotic" && <p>You can't see this video because of a copyright issue with YouTube</p>}
      <PhotoContainer>
        {props.photo1 && getPhoto(props.photo1)}
        {props.photo2 && getPhoto(props.photo2)}
        {props.photo3 && getPhoto(props.photo3)}
        {props.videoLink && (
          <VideoWrapper>
            <iframe
              src={props.videoLink}
              style={{
                position: 'relative',
                height: '60vh',
                width: '90vw',
                margin: '20px',
              }}
            />
          </VideoWrapper>
        )}
        {props.additional && (
          <StyledAnchor href={`${props.additional}`}>Please click here to interact with this entry</StyledAnchor>
        )}
      </PhotoContainer>
    </Container>
  )
}
