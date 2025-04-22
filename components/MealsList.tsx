import { FlatList, View, StyleSheet } from "react-native";
import { MealItem } from "./MealItem";
import Meal from "../models/meal";

interface MealsListProps {
  items: Meal[];
}

export const MealsList = ({items}: MealsListProps) => {
    const renderItemHandler = (itemData: any) => {
        const item = itemData.item;
        const mealItemProps = {
          id: item.id,
          title: item.title,
          imageUrl: item.imageUrl,
          duration: item.duration,
          complexity: item.complexity,
          affordability: item.affordability,
        };
    
        return <MealItem {...mealItemProps} />;
      };
    
      return (
        <View>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderItemHandler}
          />
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });