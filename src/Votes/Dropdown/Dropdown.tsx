import * as React from 'react'

import styled from 'styled-components'

export interface DropdownProps {
    options: string[],
    label: string,
    onChange: (event) => void,
    name: any
}

const StyledDropdown = styled.div`
  width: 200px;
`

const StyledSelect = styled.select`
  width: 150px;
`

export const Dropdown = (props: DropdownProps) => {
  return (
    <StyledDropdown>
        <label>{props.label}</label>
      <StyledSelect defaultValue="Choose your egg" onChange={props.onChange} name={props.name}>
        {props.options.map((el, index) => {
          return <option value={el} key={index}>{el}</option>
        })}
      </StyledSelect>
    </StyledDropdown>
  )
}
