import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
    open: boolean,
    title: string,
    onClose: () => void,
    children: ReactNode,
    trigger: ReactNode,
}
interface ModalContainerProps {
    open: boolean,
}
const ModalContainer = styled.div`
    display: ${({open}: ModalContainerProps) => open ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.4);
`

const ModalContent = styled.div`
    flex-basis: 90%;
    min-height: 50vh;
    background-color: white;
    padding: 1em;

    @media (min-width: 700px) {
        flex-basis: 60%;
        min-height: 30vh;
    }
`

const ModalTitle = styled.h3`
    text-align: center;
`

const Modal = ({open, title, children, trigger, onClose}: Props) => {
    
    return (
        <div>
        {trigger}
        <ModalContainer onClick={onClose} open={open}>
            <ModalContent onClick={(e: React.MouseEvent) => e.stopPropagation()} >
                {title && <ModalTitle>{title}</ModalTitle>}
                {children}
            </ModalContent>
        </ModalContainer>
        </div>
    )
}

export default Modal