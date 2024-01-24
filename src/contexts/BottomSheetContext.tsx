import React, { ReactNode, createContext, useCallback, useContext } from 'react'
import { useBottomSheetHookProvider } from '../hooks/useBottomSheetHook'

export const BottomSheetContext = createContext<ReturnType<typeof useBottomSheetHookProvider> | null>(null)

const BottomSheetContextProvider = ({ children }: { children: ReactNode }) => {
    const value = useBottomSheetHookProvider();
    return (
        <BottomSheetContext.Provider value={value}>
            {children}
        </BottomSheetContext.Provider>
    )
}

const BottomSheetContainer = ({ children }: { children: ReactNode }) => {
    return (
        <BottomSheetContextProvider>
            {children}
        </BottomSheetContextProvider>
    )
}

const useBottomSheetHook = () => {
    const context = useContext(BottomSheetContext);
    
    if(!context) throw Error('Context is null');

    return context;
}

export { BottomSheetContextProvider, BottomSheetContainer, useBottomSheetHook }