import { Text } from 'react-native';

function Footer() {
    return (
        <Text>
            © {new Date().getFullYear()} My Recipe Book
        </Text>
    );
}

export default Footer;