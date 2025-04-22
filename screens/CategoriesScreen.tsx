import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { CategoryGridTile } from "../components/CategoryGridTile";
import Category from "../models/category";

interface CategoriesScreenProps {
    navigation: any;
}

export const CategoriesScreen = (props: CategoriesScreenProps) => {
    const { navigation } = props;
    const renderCategoryItem = (itemData: ListRenderItemInfo<Category>) => {
        const selectHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
                categoryTitle: itemData.item.title,
            });
        };
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={selectHandler}/>;
    }
    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id} 
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
};
