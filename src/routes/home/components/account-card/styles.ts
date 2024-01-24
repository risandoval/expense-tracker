import styled from "styled-components/native"

const StyledAccountCardView = styled.View`
    width: 80%;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-self: center;
    border-radius: 5px;
    
`

const StyledAccountCardDetails = styled.View`
    display: flex;
    flex-direction: column;
    gap:30px;
    padding: 10px;
`

const StyledAccountCardSubDetails = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 10px;
`

export {
    StyledAccountCardView,
    StyledAccountCardDetails,
    StyledAccountCardSubDetails,
}