import { useContext } from "react";
import Button from "./Button";
import ThemeContext from "./ThemeContext";

const Test = () => {
    const { theme } = useContext(ThemeContext);
    return(
        <Button theme={theme}/>
    )
}

export default Test;