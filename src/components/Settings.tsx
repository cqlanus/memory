import React from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import Icon from './Icon'
import Button, { ButtonGroup } from './Button'
import ICON_MAP from '../data/iconSet'
import { useModal } from '../utils/modal'
import DIFFICULTY_MAP from '../data/difficulty'

const SettingsContainer = styled.div`
    display: flex;
    flex-direction: column;

    & label {
        font-weight: bold;
        margin-top: .25em;
    }
`

interface Props {
    reset: (cardQty?: number) => void
    setIcons: (iconSet: any) => void
    setTheme: (theme: any) => void
    theme: 'light' | 'dark'
}

const Settings = ({ reset, setIcons, setTheme, theme }: Props) => {

    const { isOpen, closeModal, openModal } = useModal()
    
    const handleReset = (cardQty?: number) => () => {
        reset(cardQty)
        closeModal()
    }

    const handleIcons = (iconSet: any) => () => {
        setIcons(iconSet)
        closeModal()
    }

    const handleTheme = (theme: 'dark' | 'light') => () => {
        setTheme(theme)
        closeModal()
    }

    const renderTrigger = () => (
        <Button floated="right" onClick={openModal} >
            <Icon name="settings" />
        </Button>
    )
    
    return (
        <Modal theme={theme} onClose={closeModal} trigger={renderTrigger()} open={isOpen} title={"Settings"}>
            <SettingsContainer>
                <Button onClick={handleReset()} negative>Restart Game</Button>

                <label>Difficulty</label>
                <ButtonGroup fluid>
                    <Button primary onClick={handleReset(DIFFICULTY_MAP.EASY)} >Easy</Button>
                    <Button primary onClick={handleReset(DIFFICULTY_MAP.MEDIUM)} >Medium</Button>
                    <Button primary onClick={handleReset(DIFFICULTY_MAP.HARD)} >Hard</Button>
                </ButtonGroup>

                <label>Card Theme</label>
                <ButtonGroup fluid>
                    <Button positive onClick={handleIcons(ICON_MAP.FOOD)} >Foods</Button>
                    <Button positive onClick={handleIcons(ICON_MAP.FLAGS)} >Flags</Button>
                    <Button positive onClick={handleIcons(ICON_MAP.ANIMALS)} >Animals</Button>
                </ButtonGroup>

                <label>UI Theme</label>
                <ButtonGroup fluid>
                    <Button onClick={handleTheme('dark')}>Dark</Button>
                    <Button onClick={handleTheme('light')}>Light</Button>
                </ButtonGroup>

            </SettingsContainer>
        </Modal>
    )
}

export default Settings