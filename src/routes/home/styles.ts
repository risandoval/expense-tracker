import styled from "styled-components/native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const StyledButtonContainer = styled.TouchableOpacity`
	position: absolute;
	bottom: 40px;
	right: 20px;
`;

const StyledScrollView = styled.ScrollView`
  height: 100%;
  /* padding: 10px; */
`

const StyledMainView = styled.View`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 0px;
`

const StyledAccountsView = styled.View`
  display: flex;
  flex-direction: column;
`

const StyledBudgetsView = styled.View`
  display: flex;
  flex-direction: column;
`

const StyledSavingsView = styled.View`
  display: flex;
  flex-direction: column;
`

const StyledRecentTransactionsView = styled.View`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
`

// const StyledBottomSheetModal = styled(BottomSheetModal)`
//   shadow-color: #000;
//   shadow-opacity: 0.3;
//   shadow-radius: 4.65px;
//   elevation: 8;
//   z-index: 99;
// `

export {
  StyledScrollView,
  StyledMainView,
  StyledAccountsView,
  StyledBudgetsView,
  StyledSavingsView,
  StyledRecentTransactionsView,
  StyledButtonContainer,
  // StyledBottomSheetModal
};
