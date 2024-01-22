import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

const getStatusBarHeight = () => {
  return Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0;
};

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;
`;

const StyledScrollView = styled.ScrollView`
	height: 100%;
	padding: 5px;
`

const StyledMainView = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`

const StyledHomeText =styled.Text`
	font-size: 16px;
	text-align: center;
`

const StyledButtonContainer = styled.TouchableOpacity`
	position: absolute;
	bottom: 40px;
	right: 20px;
`;

//bottom drawer styles below
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
`;


export { 
	StyledSafeAreaView,
  	StyledScrollView,
	StyledMainView,
	StyledHomeText,
	StyledButtonContainer,
	StyledBottomSheetModal
};