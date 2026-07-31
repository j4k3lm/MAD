import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './components/recipes/RecipeList';

export default function App() {
    return (
        <View style={styles.page}>
            <Header />
            <RecipeList />
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fffaf0',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 16,
        paddingTop: 48,
    },
});