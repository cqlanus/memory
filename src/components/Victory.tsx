import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background: teal;
    color: white;
    padding: .7em 2em;
    border: 1px solid teal;
    font-size: 1em;
    border-radius: 5px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

interface Props {
    reset: () => void
}

const Victory = ({reset}: Props) => {
    return (
        <Container>
            <h2>You Win!</h2>
            <Button onClick={reset}>Play Again</Button>
        </Container>
    )
}

export default Victory