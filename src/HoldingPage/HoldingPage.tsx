import * as React from 'react'

import styled from 'styled-components'

export interface HoldingPageProps {
    page: string
}

const Container = styled.div`
margin-top: 15vh;
display: flex;
height: 50vh;
justify-content: center;
align-items: center;
`

export const HoldingPage = (props: HoldingPageProps) => {
return (
   <Container>
       {props.page === "Votes" ? <p>Please return on Easter Saturday to cast your votes</p> :
       props.page === "Entries" ? <p>Please return on Easter Saturday to view the entries</p> : null}
   </Container>
)
}