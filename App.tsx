import { BottomSheetContainer } from './src/contexts/BottomSheetContext';
import { ThemeContextProvider } from './src/contexts/ThemeContext';
import { MainNavigation } from './src/navigators';


export default function App() {
    return (
        <ThemeContextProvider>
            <BottomSheetContainer>
                <MainNavigation />
            </BottomSheetContainer>
        </ThemeContextProvider>
    );
}

