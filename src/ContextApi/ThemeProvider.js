import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = (props) => {
    const { children } = props;
    const [theme, setTheme] = useState('primary');

    const clickMe = () => {
        setTheme('dark');
    }
    return (
        <ThemeContext.Provider value={{ clickMe, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;