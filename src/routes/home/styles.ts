import styled from "styled-components/native";

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


export { 
  	StyledScrollView,
	StyledMainView,
	StyledHomeText,
	StyledButtonContainer
};