import React from 'react'
import styled from 'styled-components'
import VEGGIES_MAP from '../data/veggies'


const ImageContainer = styled.div`
    height: 90px;
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Image = ({ value }: { value: string}) => {
    return (
        <ImageContainer>
            <img src={VEGGIES_MAP[value]} alt=""/>
        </ImageContainer>
    )
}

export default Image
