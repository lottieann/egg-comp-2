import * as React from 'react'

import styled from 'styled-components'
import Image from 'next/image'

export interface PhotoCarouselProps {
  photoInfo: any
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20vh;

  p {
    font-family: Helvetica;
    font-size: 18px;
    text-align: center;
  }
`

// const StyledImage = styled(Image)`
//   height: 300px;
//   width: 300px;
//   padding: 10px;
// `
const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const NextButton = styled.button`
  width: 0;
  height: 0;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-left: 30px solid grey;
  border-right: transparent;
  background-color: transparent;
  margin-left: 10px;
`
const PreviousButton = styled.button`
  width: 0;
  height: 0;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-right: 30px solid grey;
  border-left: transparent;
  background-color: transparent;
  margin-right: 10px;
`

const ButtonSpace = styled.div`
  height: 30px;
  width: 30px;
  background-color: transparent;
`

const EntryPhoto = styled.div`
  height: 300px;
  width: 300px;
  ${(props: { photoUrl: string }) =>
    props.photoUrl && `background-image: url(.${props.photoUrl});`}
    background-size: 300px;
  border: 2px solid gray;
  padding: 10px;
`

export const PhotoCarousel = () => {
  const [photoIndex, setPhotoIndex] = React.useState(0)
  const [isError, setIsError] = React.useState(false)

  const images = [
    '/images/TigerKing.jpg',
    '/images/Feathers.jpg',
    '/images/Plane.jpg',
    '/images/BeautySalon.jpg',
    '/images/Grenade.jpg',
    '/images/Eggcalibur.jpg',
    '/images/Boot.jpg',
  ]

  return (
    <Container>
      <PhotoContainer>
        {photoIndex <= 0 ? (
          <ButtonSpace data-testid="previous-button-space" />
        ) : (
          <PreviousButton
            data-testid="previous-button"
            onClick={() => setPhotoIndex(photoIndex - 1)}
          />
        )}
        {isError ? (
          <EntryPhoto photoUrl={images[photoIndex]} />
        ) : (
          <Image
            data-testid={`image-${photoIndex}`}
            src={`${images[photoIndex]}`}
            alt={`egg-${photoIndex}`}
            width={300}
            height={300}
            onError={() => setIsError(true)}
          />
        )}
        {photoIndex >= 6 ? (
          <ButtonSpace data-testid="next-button-space" />
        ) : (
          <NextButton
            data-testid="next-button"
            onClick={() => setPhotoIndex(photoIndex + 1)}
          />
        )}
      </PhotoContainer>
      <p>
        Please enjoy some photos from previous years. Return here Easter
        Saturday to see 2021 hopefuls!
      </p>
    </Container>
  )
}
