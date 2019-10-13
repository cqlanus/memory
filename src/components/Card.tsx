import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { CardValue } from '../types/card'

interface Props {
    card: CardValue
    first?: CardValue
    second?: CardValue
    image: ReactNode
    theme: 'dark' | 'light'
    handleClick: (card: CardValue) => () => void
}

interface ContainerProps {
    isMatched: boolean
    isSelected: boolean
    theme: 'dark' | 'light'
}
const Container = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 1em;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    height: 100px;
    margin: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({isMatched, theme}: ContainerProps) => isMatched 
        ? 'goldenrod'
        : theme === 'dark' 
        ? 'rgba(0,0,0,0.5)'
        : 'white'};

    transform: ${({isSelected}: ContainerProps) => isSelected ? 'rotateY(180deg)': 'rotateY(0deg)'};
    transition: 0.6s;
    transform-style: preserve-3d;
    cursor: pointer;

    :hover {
        box-shadow: 2px 2px 2px rgba(140, 0, 0, 0.5);
    }

    :active {
        transform: scale(0.97);
        transition: transform .2s;
    }
`

const Card = ({card, handleClick, first, second, image, theme}: Props) => {
    const { isMatched } = card
    const isFirstSelected = first && first.id === card.id
    const isSecondSelected = second && second.id === card.id
    const isShown = isFirstSelected || isSecondSelected || isMatched
    return (
        <Container theme={theme} isSelected={!!isShown} isMatched={isMatched} onClick={handleClick(card)}>
            {isShown && image}
        </Container>
    )
}

export default Card
