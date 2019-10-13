import React from 'react'
import styled from 'styled-components'
import ICON_MAP from '../data/iconSet'


const ImageContainer = styled.div`
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`

interface Props {
    iconSet: any
    value: string
}

const Image = ({ value, iconSet }: Props) => {
    // const set = ICON_MAP[iconSet]
    const src = iconSet[value] || iconSet.default
    return (
        <ImageContainer>
            <img src={src} alt=""/>
        </ImageContainer>
    )
}

export default Image
