import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";
import { appColors } from "../../styles/global";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
const getStatusBarHeight = () => {
  return Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0;
};

const StyledSafeAreaView = styled.SafeAreaView`
    flex: 1;
    padding-top: ${getStatusBarHeight()}px;
`;

const StyledButtonContainer = styled.TouchableOpacity`
	position: absolute;
	bottom: 40px;
	right: 20px;
`;

const StyledScrollView = styled.ScrollView`
    height: 100%;
    padding: 10px;
`

const StyledMainView = styled.View`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;
`

const StyledBottomSheetModal = styled(BottomSheetModal)`
  shadow-color: #000;
  shadow-opacity: 0.3;
  shadow-radius: 4.65px;
  elevation: 8;
`

export {
  StyledSafeAreaView,
  StyledScrollView,
  StyledMainView,
  StyledButtonContainer,
  StyledBottomSheetModal
};
