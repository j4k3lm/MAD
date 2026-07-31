import { View, Text, StyleSheet } from 'react-native';
import { BOOK_TITLE, AUTHOR } from '../constants';

function Title() {
    return (
        <View>
            <Text style={styles.heading}>{BOOK_TITLE}</Text>
            <Text>{`${BOOK_TITLE} by ${AUTHOR}`}</Text>
            <Text>Simple recipes, cooked simply.</Text>
        </View>
    );
}

export default Title;

const styles = StyleSheet.create({
    heading: {
        fontSize: 28,
        color: "#b5651d",
        fontWeight: "bold",
    },
});