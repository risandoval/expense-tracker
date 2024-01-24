import styled from "styled-components/native";

// Containers
const StyledView = styled.View`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
`;

const StyledSectionView = styled.View`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

// Input text
const StyledInputView = styled.View`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const StyledTextInput = styled.TextInput`
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
`;

// Login buttons
const StyledButtonContainer = styled.TouchableOpacity`
    background-color: #000000;
    border-radius: 10px;
`;

const StyledButtonLabel = styled.Text`
    color: #FFFFFF;
    padding: 16px;
    text-align: center;
    font-weight: bold;
`;

// Separator
const StyledSeparatorContainer = styled.View`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const StyledSeparatorLine = styled.View`
    flex: 1;
    height: 1px;
    background-color: #000;
`;

// Alternative login buttons
const StyledAltButtonContainer = styled.TouchableOpacity`
    background-color: #E1E1E1;
    border-radius: 10px;
`;

const StyledAltButtonLabel = styled.Text`
    color: #000000;
    padding: 16px;
    text-align: center;
    font-weight: bold;
`;

export {
    StyledView,
    StyledSectionView,
    StyledInputView,
    StyledTextInput,
    StyledButtonContainer,
    StyledButtonLabel,
    StyledSeparatorContainer,
    StyledSeparatorLine,
    StyledAltButtonContainer,
    StyledAltButtonLabel
};
