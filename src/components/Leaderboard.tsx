import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import { useModal } from '../utils/modal'
import Button, { ButtonGroup } from './Button'
import Icon from './Icon'
import { getStorage } from '../utils/storage'
import { format } from 'date-fns'
import DIFFICULTY_MAP from '../data/difficulty'
import { getDifficulty } from '../utils/difficulty'
import { sortEntriesByClicks } from '../utils/common'

interface Props {
    theme: 'light' | 'dark'
    hasWon: any
}

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .25em 1em;
`

const RowItem = styled.div`
    text-align: center;
`

const HeaderRow= styled(Row)`

    ${RowItem} {
        font-size: 1.2em;
        font-weight: bold;
    }
`

const Leaderboard = ({theme, hasWon}: Props) => {
    const { isOpen, closeModal, openModal } = useModal()
    const [ allScores, setScores ] = useState()
    const [ difficultyNum, setDifficulty ] = useState(DIFFICULTY_MAP.MEDIUM)

    useEffect(() => {
        const storage = getStorage('clickCount')
        setScores(storage)
    }, [hasWon])
    
    const renderTrigger = () => (
        <Button floated="right" onClick={openModal} >
            <Icon name="leaderboard" />
        </Button>
    )

    const handleDifficulty = (diff: number) => () => {
        setDifficulty(diff)
    }

    const difficulty = getDifficulty(difficultyNum)
    type ScoreEntry = [ string, string ]
    const scores: { [key: string]: string } = allScores ? allScores[difficulty] : {}
    const scoresForDifficulty: ScoreEntry[] = Object.entries(scores).sort(sortEntriesByClicks).slice(0,5)

    const isDifficultyActive = (diffNum: number) => diffNum === difficultyNum
    
    return (
        <Modal title="Leaderboard" theme={theme} open={isOpen} onClose={closeModal} trigger={renderTrigger()}>
            <ButtonGroup fluid>
                <Button active={isDifficultyActive(DIFFICULTY_MAP.EASY)} onClick={handleDifficulty(DIFFICULTY_MAP.EASY)} >Easy</Button>
                <Button active={isDifficultyActive(DIFFICULTY_MAP.MEDIUM)} onClick={handleDifficulty(DIFFICULTY_MAP.MEDIUM)}>Medium</Button>
                <Button active={isDifficultyActive(DIFFICULTY_MAP.HARD)} onClick={handleDifficulty(DIFFICULTY_MAP.HARD)}>Hard</Button>
            </ButtonGroup>
            <HeaderRow>
                <RowItem>Date</RowItem>
                <RowItem>Clicks</RowItem>
            </HeaderRow>

            {
                scoresForDifficulty.map(([ now, clicks ]: [ string, string ]) => {
                    const numNow = +now
                    const date = format(new Date(numNow * 1000), 'h:mma MM/dd/yy')
                    return (
                        <Row key={now}>
                            <RowItem>{date}</RowItem>
                            <RowItem>{clicks}</RowItem>
                        </Row>
                    )
                })
            }
            
        </Modal>
    )
}

export default Leaderboard
