import { useContext } from "react";
import Button from "./Button";
import ThemeContext from "./ThemeContext";

const Toolbar = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div>
            <Button theme={theme} />
        </div>
    );
}

export default Toolbar;