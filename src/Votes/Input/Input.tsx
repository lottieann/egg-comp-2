import * as React from 'react'

import styled from 'styled-components'

export interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  required?: boolean;
  onChange: (event) => void;
  name: string;
  value?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

const StyledLabel = styled.label`
  font-family: Helvetica;
  margin: 5px;
`

const StyledInput = styled.input`
  font-family: Helvetica;
`

export const Input = (props: InputProps) => {
  return (
    <Wrapper>
      <StyledLabel>{props.label}</StyledLabel>
      <StyledInput
        value={props.value}
        placeholder={props.placeholder}
        type={props.type}
        required={props.required}
        onChange={props.onChange}
        name={props.name}
      />
    </Wrapper>
  )
}
