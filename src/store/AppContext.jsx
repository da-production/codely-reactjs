import { createContext, useState } from "react";

export const AppContext = createContext({
    theme: 'dracula',
    mode: 'dark',
    switchMode: (mode) => {},
});

export default function AppContextProvider({children}) {
    const themes = {
        light: ['light'],
        dark: ['dracula'],
    }
    const [appValues, setAppValues] = useState({
        theme: 'dracula',
        mode: 'dark',
    })

    const switchMode = (mode) => {
        setAppValues(p=>{
            return {
                ...appValues,
                theme:themes[mode][0],
                mode: mode
            }
        });
    }

    return <AppContext.Provider value={{appValues, switchMode}}>
        <div className={appValues.mode}>
            {children}
        </div>
    </AppContext.Provider>

}