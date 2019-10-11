import React from 'react'
import styled from 'styled-components'
import { CardValue } from '../types/card'

interface Props {
    card: CardValue
    first?: CardValue
    second?: CardValue
    handleClick: (card: CardValue) => () => void
}

const Container = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 1em;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    flex-basis: 100%;
    margin: 0.5em;
    min-height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 500px) {
        flex-basis: 200px;
    }

    :hover {
        box-shadow: 2px 2px 2px rgba(140, 0, 0, 0.5);
    }
`

const Card = ({card, handleClick, first, second}: Props) => {
    const { value, isMatched } = card
    const isShownFirst = first && first.id === card.id
    const isShownSecond = second && second.id === card.id
    const isShown = isShownFirst || isShownSecond || isMatched
    return (
        <Container onClick={handleClick(card)}>
            {isShown && <div>{value}</div>}
        </Container>
    )
}

export default Card
