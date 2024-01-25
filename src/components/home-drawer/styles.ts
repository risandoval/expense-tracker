//home-drawer styles
import styled from "styled-components/native";
import { StyledBodyText2 } from "../../styles/global";
import { Platform } from "react-native";

const StyledBottomSheetModal = styled.View`
  background-color: white;
  padding: 16px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  ${Platform.OS === "ios"
        ? `
    shadowColor: #000;
    shadowOffset: { width: 0, height: -3 };
    shadowOpacity: 0.1;
    shadowRadius: 5;
  `
        : `
    elevation: 5;
  `}
`

const StyledColumnView = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  padding: 0 15px;
`

const StyledRowView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const StyledDrawerButton = styled.TouchableOpacity`
  background-color: transparent;
  border: 1px solid;
  border-radius: 10px;
  padding: 10px 5px;
  width: 30%;
`

const StyledButtonText = styled(StyledBodyText2)`
  text-align: center;
`



export {
    StyledColumnView,
    StyledRowView,
    StyledDrawerButton,
    StyledButtonText,
};
