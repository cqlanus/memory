import React from 'react'
import styled from 'styled-components'
import VEGGIES_MAP from '../data/veggies'


const ImageContainer = styled.div`
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = ({ value }: { value: string}) => {
    const src = VEGGIES_MAP[value] || VEGGIES_MAP.default
    return (
        <ImageContainer>
            <img src={src} alt=""/>
        </ImageContainer>
    )
}

export default Image
