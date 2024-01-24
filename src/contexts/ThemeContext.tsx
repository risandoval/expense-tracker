import React, { ReactNode, createContext, useState } from 'react'

type TThemeType = 'light' | 'dark';

type TContextType = {
    theme: TThemeType,
    toggleTheme: (() => void)
}


export const ThemeContext = createContext<TContextType>({theme: 'light', toggleTheme: Function});

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<TThemeType>('light');

    const toggleTheme = () => {
        setTheme((prev) => prev === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContextProvider }