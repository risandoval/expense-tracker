import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeContextProvider } from './src/contexts/ThemeContext';
import { MainNavigation } from './src/navigators';


export default function App() {
    return (
        <ThemeContextProvider>
            <GestureHandlerRootView style={{flex: 1}}>
                <MainNavigation />
            </GestureHandlerRootView>
        </ThemeContextProvider>
    );
}

