import * as React from 'react'

import styled from 'styled-components'

import { Dropdown } from './Dropdown'
import { Input } from './Input'
import { VotesData } from './types'

const Container = styled.div`
  margin-top: 15vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Votes = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    first: '1',
    second: '2',
    third: '3',
    fourth: '4',
    fifth: '5',
  })

  const [hasSubmitted, setHasSubmitted] = React.useState(false)
  const [validated, setValidated] = React.useState(false)

  const submitForm = (data: VotesData) => {
    // fetch('/api/votes', {
    //   method: 'post',
    //   headers: {
    //     Accept: 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // }).then((res) => {
    //   res.status === 200 ? setHasSubmitted(true) : ''
    // })
    console.log(data)
    setHasSubmitted(true)
  }

  const validateForm = () => {
    const sameEgg =
      formData.first ===
        (formData.second ||
          formData.third ||
          formData.fourth ||
          formData.fifth) ||
      formData.second ===
        (formData.third || formData.fourth || formData.fifth) ||
      formData.third === (formData.fourth || formData.fifth) ||
      formData.fourth === formData.fifth

    if (formData.name === '') {
      alert('Please enter your name')
    }
    if (formData.email === '') {
      alert('Please enter an email address')
    }
    if (sameEgg) {
      alert('Please choose different eggs for each of your favourites')
    } else {
      setValidated(true)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const options = ['Select an egg', '1', '2', '3', '4', '5']
  const labels = {
    first: 'My favourite egg was:',
    second: 'My second favourite egg was:',
    third: 'My third favourite egg was:',
    fourth: 'My fourth favourite egg was:',
    fifth: 'My fifth favourite egg was:',
  }

  const eggOptions = () => {
    return Object.entries(labels).map(([place, text], index) => {
      return (
        <Dropdown
          options={options}
          label={text}
          key={index}
          onChange={handleChange}
          name={place}
        />
      )
    })
  }

  const refreshPage = () => {
    window.location.reload()
  }

  const Submitted = () => {
    return (
      <React.Fragment>
        <p>Thank you {formData.name} for submitting your vote!</p>
        <button
          data-testid="reload-button"
          onClick={refreshPage}
          onKeyDown={(e: React.KeyboardEvent) =>
            e.key === 'Enter' && refreshPage()
          }
        >
          Click here to allow someone else to vote
        </button>
      </React.Fragment>
    )
  }

  return (
    <Container>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdJKFyzMuUCj0dnoYSt-QUIgMlDnIWDuTno4cyZqPCjAme_kg/viewform?embedded=true"
        width="640"
        height="1515"
        frameBorder="0"
      >
        Loading…
      </iframe>
    </Container>
  )
}
