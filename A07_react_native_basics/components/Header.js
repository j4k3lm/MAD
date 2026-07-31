import { View, Text } from 'react-native';
import Title from './Title';

function Header() {
    const isWeekend = true;

    return (
        <View>
            <Title />
            <Text>
                {isWeekend ? "Happy cooking this weekend!" : "Happy cooking today!"}
            </Text>
        </View>
    );
}

export default Header;