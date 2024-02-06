//home-drawer styles
import styled, { css } from "styled-components/native";
import { StyledBodyText1, StyledBodyText2, appColors } from "../../styles/global";
import { Platform } from "react-native";
import { TouchableOpacityProps } from 'react-native';

type ButtonName = 'Income' | 'Expense' | 'Transfer' | 'Default';

interface StyledDrawerButtonProps extends TouchableOpacityProps {
  active?: boolean;
  buttonName: ButtonName;
}

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

const activeButtonStyles = css<StyledDrawerButtonProps>`
  ${(props) => props.active && css`
    background-color: ${getColorForButton(props.buttonName)};
    color: ${getTextColorForButton(props.buttonName)};
  `}
`;

const getColorForButton = (buttonName: ButtonName): string => {
  switch (buttonName) {
    case 'Income':
      return '#d2e8d0';
    case 'Expense':
      return '#fcdada';
    case 'Transfer':
      return '#cde2f5';
    default:
      return '';
  }
};

const getTextColorForButton = (buttonName: ButtonName): string => {
  switch (buttonName) {
    case 'Income':
      return '#25B570';
    case 'Expense':
      return '#F06666';
    case 'Transfer':
      return '#2570B5';
    default:
      return '#000000';
  }
};

const StyledColumnView = styled.View`
  display: flex;
  flex-direction: column;
  padding: 10px 15px 15px 15px;
  gap: 10px;
`

const StyledRowView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const StyledDrawerButton = styled.TouchableOpacity<StyledDrawerButtonProps>`
  background-color: ${p => p.theme.buttonFieldBackgroundColor};
  border-radius: 10px;
  padding: 10px 5px;
  width: 30%;

  ${activeButtonStyles}
`;

const StyledButtonText = styled(StyledBodyText2)<StyledDrawerButtonProps>`
  text-align: center;
  
  ${activeButtonStyles}
`

const StyledConfirmButton = styled.TouchableOpacity`
  background-color: ${appColors.green};
  border-radius: 10px;
  padding: 10px 5px;
  width: 30%;
  display: flex;
  flex-direction: column;
  width: 95%;
`

const StyledConfirmText = styled(StyledBodyText1)`
  text-align: center;
  color: ${appColors.white};
`

export {
    StyledColumnView,
    StyledRowView,
    StyledDrawerButton,
    StyledButtonText,
    StyledConfirmButton,
    StyledConfirmText
};
