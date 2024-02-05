import styled from "styled-components/native";

const StyledRecentTrasactionGroupView = styled.View`
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    gap:5px;
`

const StyledDateView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`

const StyledDayBadgeView = styled.View`
    padding: 7px 14px;
    background-color: ${p => p.theme.invertedBackgroundColor};
    border-radius: 5px;
    overflow: hidden;
`
const StyledDayBadgeText = styled.Text`
    color: ${p => p.theme.invertedFontColor};
`

export {
    StyledRecentTrasactionGroupView,
    StyledDateView,
    StyledDayBadgeView,
    StyledDayBadgeText
}