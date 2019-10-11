import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import Victory from './Victory'
import { CardValue } from '../types/card'
import { createInitialValues } from '../utils/common'

const Container = styled.div`
    padding: 1em;
`

const Title = styled.h2`
    text-align: center;
`

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(12, 1fr);


    @media (min-width: 600px) {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(6, 1fr);
    }

    @media (min-width: 800px) {
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }
`


const GameBoard = () => {
    const [values, setValues] = useState(createInitialValues())

    const [first, setFirst] = useState()
    const [second, setSecond] = useState()
    const [hasWon, setWon] = useState()

    const hasUserWon = () => {
        setTimeout(() => {
            const value = values.every(({ isMatched }) => isMatched)
            setWon(value)
        }, 1000)
    }

    const clearSelected = () => {
        setSecond(undefined)
        setFirst(undefined)
    }
    const peekSecond = (card: CardValue) => {
        setSecond(card)
        setTimeout(clearSelected, 1000)
    }

    const setMatched = (card1: CardValue, card2: CardValue) => {
        const updatedValues = values.map(c => {
            const isSelectedCards = [card1.id, card2.id].includes(c.id)
            if (isSelectedCards) {
                return {
                    ...c,
                    isMatched: true,
                }
            } else {
                return c
            }
        })

        setValues(updatedValues)
    }

    const handleClick = (card: CardValue) => () => {
        if (second) {
            return
        }

        if (!first) {
            setFirst(card)
        } else if (first.id === card.id) {
            setFirst(undefined)
        } else if (card.value === first.value) {
            setMatched(card, first)
            setFirst(undefined)
        } else {
            peekSecond(card)
        }
    }

    const reset = () => {
        clearSelected()
        setValues(createInitialValues())
    }

    hasUserWon()
    
    return (
        <Container>
            <Title>Memory Game</Title>
            {hasWon ? (
                <Victory reset={reset} />
            ) : (
                <CardContainer>
                    {values.map(c => (
                        <Card
                            first={first}
                            second={second}
                            key={c.id}
                            card={c}
                            handleClick={handleClick}
                        />
                    ))}
                </CardContainer>
            )}
        </Container>
    )
}

export default GameBoard
