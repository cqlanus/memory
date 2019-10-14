import React from 'react'
import styled from 'styled-components'
import Button from './Button'

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

    const handleReset = () => reset()
    
    return (
        <Container>
            <h2>You Win!</h2>
            <Button primary onClick={handleReset}>Play Again</Button>
        </Container>
    )
}

export default Victory