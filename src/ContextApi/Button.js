import { useContext } from 'react';
import { Button as BootstrapBtn } from 'react-bootstrap';
import ThemeContext from './ThemeContext';

const Button = (props) => {
    const { clickMe } = useContext(ThemeContext);
    const { theme } = props;
    return <BootstrapBtn onClick={clickMe} variant={theme}>Click me</BootstrapBtn>;
}

export default Button;