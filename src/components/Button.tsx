import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
    primary?: boolean
    positive?: boolean
    negative?: boolean
    fluid?: boolean
    floated?: 'right' | 'left'
    icon?: string
    children: ReactNode
}


const Button = styled.button`
    background: ${({primary, positive, negative}: Props) => primary 
        ? 'rgb(33, 133, 208)' 
        : positive 
        ? '#21ba45' 
        : negative 
        ? '#db2828' 
        : 'lightgrey'};
    color: ${({primary, positive, negative}: Props) => (primary || positive || negative) ? 'white' : 'rgba(0,0,0,.6)'};
    padding:  ${({children}: Props) => typeof children === "string" ? '.7em 2em' : '.25em' };
    border: none;
    margin-right: .25em;
    margin-bottom: .25em;
    font-size: 1em;
    font-weight: bold;
    float: ${({floated, children}: Props) => {
        if (floated) {
            return floated === 'right' ? 'right' : 'left'
        } else {
            return 'none'
        }
    }};
    /* border-radius: 5px; */
    border-radius:  ${({children}: Props) => typeof children === "string" ? '5px' : '50%' };
    width: ${({fluid}: Props) => fluid ? '100%' : 'inherit'};
    text-align: center;
    cursor: pointer;

    :hover {
        background: ${({primary, positive, negative}: Props) => primary 
            ? '#1678c2' 
            : positive 
            ? '#16ab39' 
            : negative 
            ? '#d01919' 
            : '#cacbcd'};
    }
`

export const ButtonGroup = styled.div`
    display: inline-flex;
    width: ${({fluid}: Props) => fluid ? '100%' : 'inherit'};

    ${Button} {
        border-radius: 0;
        margin-right: 0;
        background: ${({primary, positive, negative}: Props) => primary 
        ? 'rgb(33, 133, 208)' 
        : positive 
        ? '#21ba45' 
        : negative 
        ? '#db2828' 
        : 'lightgrey'};
        color: ${({primary, positive}: Props) => (primary || positive) ? 'white' : 'rgba(0,0,0,.6)'};

        :hover {
        background: ${({primary, positive, negative}: Props) => primary 
            ? '#1678c2' 
            : positive 
            ? '#16ab39' 
            : negative 
            ? '#d01919' 
            : '#cacbcd'};
    }
    }

    ${Button}:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    ${Button}:last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`

export default Button