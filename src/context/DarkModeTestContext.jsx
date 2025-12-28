import {createContext, useState, useEffect} from 'react';

export const DarkModeTestContext = createContext();

export function DarkModeTestProvider({children}) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode(mode => !mode);
    
    // 다크모드 상태에 따라 실제 HTML에 클래스 적용
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);
    return (
        <DarkModeTestContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeTestContext.Provider>
    );
}
