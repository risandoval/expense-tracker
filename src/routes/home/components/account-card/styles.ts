import { Dimensions } from "react-native"
import styled from "styled-components/native"
import { appColors } from "../../../../styles/global"

let deviceWidth = Dimensions.get('window').width

const StyledAccountCardView = styled.View`
    width: ${deviceWidth * .8}px;
    display: flex;
    flex-direction: column;
    background-color: ${appColors.green};
    border-radius: 5px;
    align-self: center;
    margin: 0px 10px;
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