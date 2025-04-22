import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { MealItem } from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";
import { MealsList } from "../components/MealsList";

interface MealsOverviewProps {
  route: any;
  navigation: any;
}

export const MealsOverviewScreen = (props: MealsOverviewProps) => {
  const { route, navigation } = props; // alternatively we can use useRoute hook from react-navigation
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />

};


