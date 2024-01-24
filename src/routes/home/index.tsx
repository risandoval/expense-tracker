import React, { useContext } from 'react'
import {
    StyledAccountsView,
    StyledBudgetsView,
    StyledMainView,
    StyledSavingsView,
    StyledScrollView,
} from './styles'
import { ThemeContext } from '../../contexts/ThemeContext';
import { StyledBodyText1, StyledSafeAreaView } from '../../styles/global';
import { HomeSection } from './components/home-section';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';



const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const tabBarHeight = useBottomTabBarHeight();
    return (
        <StyledSafeAreaView>
            <StyledScrollView >
                {/* temporary change theme button  */}

                {/* <Button title='Change theme' onPress={() => toggleTheme()} />
                <Text>{theme}</Text> */}

                {/* add new screens below \/ */}

                <StyledMainView>
                    <HomeSection label="Accounts">
                        <StyledAccountsView>
                            <StyledBodyText1>Test</StyledBodyText1>
                        </StyledAccountsView>
                    </HomeSection>

                    <HomeSection label="Budget">
                        <StyledBudgetsView>
                            <StyledBodyText1>Test</StyledBodyText1>
                        </StyledBudgetsView>
                    </HomeSection>

                    <HomeSection label="Savings">
                        <StyledSavingsView>
                            <StyledBodyText1>Test</StyledBodyText1>
                        </StyledSavingsView>
                    </HomeSection>
                </StyledMainView>

            </StyledScrollView>
        </StyledSafeAreaView>
    )
}

export { Home }
