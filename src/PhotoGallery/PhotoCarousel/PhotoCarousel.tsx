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
`

const StyledImage = styled(Image)`
  border: 2px solid red;
`
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

  background-color: transparent;
`
const PreviousButton = styled.button`
  width: 0;
  height: 0;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-right: 30px solid grey;
  background-color: transparent;
`

const ButtonSpace = styled.div`
  height: 30px;
  width: 30px;
  background-color: transparent;
`

const EntryPhoto = styled.div`
  height: 150px;
  width: 150px;
  background-color: lightgray;
  border: 2px solid gray;
`

export const PhotoCarousel = (props: PhotoCarouselProps) => {
  const [photoIndex, setPhotoIndex] = React.useState(0)
  const [isError, setIsError] = React.useState(false)


const images = [`${props.photoInfo.photo1}`, `${props.photoInfo.photo2}`, `${props.photoInfo.photo3}`]

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
          <EntryPhoto />
        ) : (
          <StyledImage
            data-testid={`image-${photoIndex}`}
            src={`${images[photoIndex]}`}
            alt={`egg-${photoIndex}`}
            width={250}
            height={250}
            onError={() => setIsError(true)}
          />
        )}
        {photoIndex >= 2 ? (
          <ButtonSpace data-testid="next-button-space" />
        ) : (
          <NextButton
            data-testid="next-button"
            onClick={() => setPhotoIndex(photoIndex + 1)}
          />
        )}
      </PhotoContainer>
    </Container>
  )
}
