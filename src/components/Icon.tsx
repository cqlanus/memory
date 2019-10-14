import React from 'react'
import styled from 'styled-components'
import MISC_IMG_MAP from '../data/misc'

const Container = styled.div`
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Img = styled.img`
    flex: 1;
    height: inherit;
    width: inherit;
`

interface Props {
    name: string
}

const Icon = ({ name }: Props) => {
    const src = MISC_IMG_MAP[name]
    
    return (
        <Container>
            <Img src={src} alt=""/>
        </Container>
    )

}

export default Icon