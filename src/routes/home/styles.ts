import styled from 'styled-components/native'

const StyledScrollView = styled.ScrollView`
    height: 100%;
    padding: 10px;
`

const StyledMainView = styled.View`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10rem;
`

const StyledCard = styled.View`
    background-color: #1e1e1e50;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
`

const StyledRowCards = styled.View`
    display: flex;
    flex-direction: row;
    gap: 10rem;
    margin-bottom: 50px;
`

const StyledRowCardsViews = styled(StyledCard)`
    flex:1;
`

const StyledRecentTransactions = styled(StyledMainView)`
    gap: 5rem;
`

const StyledRecentTransactionCard = styled.View`
    background-color: #1e1e1e50;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
    border-radius: 10px;
`

const StyledRecentTransactionCardLeft = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20rem;
`

const StyledRecentTransactionTitle = styled.View`
    display: flex;
    flex-direction: column;
    gap: 5rem
`

const StyledRecentTransactionCardRight = styled.View`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin-left: auto;
`

const SampleIcon = styled.View`
    background-color: #1e1e1e50;
    min-height: 15px;
    height: 35px;
    aspect-ratio: 1/1;
    border-radius: 100%;

`

export {
    StyledScrollView,
    StyledMainView,
    StyledCard,
    StyledRowCards,
    StyledRowCardsViews,
    StyledRecentTransactions,
    StyledRecentTransactionCard,
    StyledRecentTransactionCardLeft,
    StyledRecentTransactionTitle,
    StyledRecentTransactionCardRight,
    SampleIcon
}