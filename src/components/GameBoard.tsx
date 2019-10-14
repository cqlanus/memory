import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import Victory from './Victory'
import Settings from './Settings'
import Leaderboard from './Leaderboard'
import Image from './Image'
import { CardValue } from '../types/card'
import { createInitialValues } from '../utils/common'
import ICON_MAP from '../data/iconSet'
import { handleVictory } from '../utils/victory'
import DIFFICULTY_MAP from '../data/difficulty'


interface ContainerProps {
    theme: 'light' | 'dark'
}
const Container = styled.div`
    padding: 1em;
    background-color: ${({theme}: ContainerProps) => theme === 'light' ? 'white' : 'rgba(0,0,0,0.6)' };
    color: ${({theme}: ContainerProps) => theme === 'light' ? 'black' : 'white' };
    min-height: 100vh;
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

    @media (min-width: 1000px) {
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
`


const GameBoard = () => {
    const [values, setValues] = useState(createInitialValues(4))

    const [first, setFirst] = useState()
    const [second, setSecond] = useState()
    const [hasWon, setWon] = useState()
    const [ iconSet, setIcons ] = useState(ICON_MAP.FOOD)
    const initialTheme: 'dark' | 'light' = 'dark'
    const [ theme, setTheme ] = useState(initialTheme)
    const [ clicks, setClicks ] = useState(0)

    const incrementClick = () => setClicks(clicks + 1)

    const hasUserWon = () => {
        setTimeout(() => {
            const value = values.every(({ isMatched }) => isMatched)
            if (value) {
                handleVictory(clicks, values.length)
            }
            setWon(value)
        }, hasWon ? 0 : 1000)
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

        incrementClick()

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

    const reset = (cardQty: number = DIFFICULTY_MAP.MEDIUM) => {
        console.log({here: 1})
        clearSelected()
        setValues(createInitialValues(cardQty))
        setClicks(0)

        console.log({values})
        console.log({clicks})
    }

    hasUserWon()
    
    return (
        <Container theme={theme} >
            <Settings theme={theme} setTheme={setTheme} setIcons={setIcons} reset={reset} />
            <Leaderboard hasWon={hasWon} theme={theme} />
            <Title>Memory Game</Title>
            
            {hasWon ? (
                <Victory reset={reset} />
            ) : (
                <CardContainer>
                    {values.map(c => (
                        <Card
                            theme={theme}
                            first={first}
                            second={second}
                            key={c.id}
                            card={c}
                            handleClick={handleClick}
                            image={<Image iconSet={iconSet} value={c.value} />}
                        />
                    ))}
                </CardContainer>
            )}
            
        </Container>
    )
}

export default GameBoard
