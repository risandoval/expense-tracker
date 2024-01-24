import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetContainer } from './src/contexts/BottomSheetContext';
import { ThemeContextProvider } from './src/contexts/ThemeContext';
import { MainNavigation } from './src/navigators';


export default function App() {
    return (
        <ThemeContextProvider>
            <BottomSheetContainer>
                <GestureHandlerRootView style={{flex: 1}}>
                    <MainNavigation />
                </GestureHandlerRootView>
            </BottomSheetContainer>
        </ThemeContextProvider>
    );
}

