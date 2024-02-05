import React, { ReactElement, ReactNode } from 'react'
import { StyledSectionHeaderView, StyledSectionView } from '../../../login/styles'
import { StyledHeader1 } from '../../../../styles/global'

const HomeSection = ({ label, children, headerComponents }: { label: string, children: ReactNode, headerComponents?: ReactElement[] }) => {
    return (
        <StyledSectionView>
            <StyledSectionHeaderView>
                <StyledHeader1>{label}</StyledHeader1>

                {headerComponents && headerComponents.map((component, index) => component)}
            </StyledSectionHeaderView>

            {children}
        </StyledSectionView>
    )
}

export { HomeSection }