import React, { ReactNode } from 'react'
import { StyledSectionHeaderView, StyledSectionView } from '../../../login/styles'
import { StyledHeader1 } from '../../../../styles/global'

const HomeSection = ({ label, children }: { label: string, children: ReactNode }) => {
    return (
        <StyledSectionView>
            <StyledSectionHeaderView>
                <StyledHeader1>{label}</StyledHeader1>
            </StyledSectionHeaderView>
            
            {children}
        </StyledSectionView>
    )
}

export { HomeSection }