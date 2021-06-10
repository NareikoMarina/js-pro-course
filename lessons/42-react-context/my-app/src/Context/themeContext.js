import React, { useCallback, useState } from 'react';

export const themeContext = React.createContext();

export const themes = {
    dark: 'dark',
    light: 'light',
};

const ThemeProvider = (props) => {
    const [currentTheme, setCurrentTheme] = useState(themes.dark);

    const changeTheme = useCallback(() => {
        console.log('qqq');
        if (currentTheme === themes.dark) {
            setCurrentTheme(themes.light);
        } else {
            setCurrentTheme(themes.dark);
        }
    }, [currentTheme]);

    return (
        <themeContext.Provider value={[currentTheme, changeTheme]}>
            {props.children}
        </themeContext.Provider>
    );
};

export default ThemeProvider;
