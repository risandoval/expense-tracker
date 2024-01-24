import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeContextProvider } from './src/contexts/ThemeContext';
import { MainNavigation } from './src/navigators';
import { BottomSheetContainer } from './src/contexts/BottomSheetContext';


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

