import React, { ReactNode } from 'react'
import { StyledSectionView } from '../../../login/styles'
import { StyledHeader1 } from '../../../../styles/global'

const HomeSection = ({label, children}: {label: string, children: ReactNode}) => {
    return (
        <StyledSectionView>
            <StyledHeader1>{label}</StyledHeader1>
            {children}
        </StyledSectionView>
    )
}

export { HomeSection }