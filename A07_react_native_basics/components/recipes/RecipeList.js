import { View, StyleSheet } from 'react-native';
import PancakeRecipe from './PancakeRecipe';
import EggsRecipe from './EggsRecipe';
import CakeRecipe from './CakeRecipe';
import Divider from '../Divider';

function RecipeList() {
    return (
        <View>
            <View style={styles.recipeCard}>
                <PancakeRecipe />
            </View>

            <Divider />

            <View style={styles.recipeCard}>
                <EggsRecipe />
            </View>

            <Divider />

            <View style={styles.recipeCard}>
                <CakeRecipe />
            </View>
        </View>
    );
}

export default RecipeList;

const styles = StyleSheet.create({
    recipeCard: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginVertical: 8,
        borderColor: '#ddd',
    },
});