import React from 'react'
import styled from 'styled-components'
import Image from './Image'
import { CardValue } from '../types/card'

interface Props {
    card: CardValue
    first?: CardValue
    second?: CardValue
    handleClick: (card: CardValue) => () => void
}

interface ContainerProps {
    isMatched: boolean
    isSelected: boolean
}
const Container = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 1em;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    flex-basis: 100px;
    height: 100px;
    margin: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({isMatched}: ContainerProps) => isMatched ? 'yellow' : 'white'};

    transform: ${({isSelected}: ContainerProps) => isSelected ? 'rotateY(180deg)': 'rotateY(0deg)'};
    transition: 0.6s;
	transform-style: preserve-3d;

    @media (min-width: 500px) {
        flex-basis: calc(25% - 10px);
    }

    :hover {
        box-shadow: 2px 2px 2px rgba(140, 0, 0, 0.5);
    }

    :active {
        transform: scale(0.97);
        transition: transform .2s;
    }
`

const Card = ({card, handleClick, first, second}: Props) => {
    const { value, isMatched } = card
    const isFirstSelected = first && first.id === card.id
    const isSecondSelected = second && second.id === card.id
    const isShown = isFirstSelected || isSecondSelected || isMatched
    return (
        <Container isSelected={!!isShown} isMatched={isMatched} onClick={handleClick(card)}>
            {isShown && <Image value={value} />}
        </Container>
    )
}

export default Card
