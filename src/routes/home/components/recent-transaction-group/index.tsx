import React, { ReactNode } from 'react'
import { StyledDateView, StyledDayBadgeText, StyledDayBadgeView, StyledRecentTrasactionGroupView } from './style'
import { StyledBodyText2 } from '../../../../styles/global'

const RecentTransactionGroup = ({ children, date = '' }: { children: ReactNode, date: string }) => {

    return (
        <StyledRecentTrasactionGroupView>
            
            <StyledDateView>
                <StyledDayBadgeView>
                    <StyledDayBadgeText>
                        Mon
                    </StyledDayBadgeText>
                </StyledDayBadgeView>

                <StyledBodyText2>
                    {new Date().toLocaleDateString()}
                </StyledBodyText2>

            </StyledDateView>

            {children}

        </StyledRecentTrasactionGroupView>
    )
}

export { RecentTransactionGroup }