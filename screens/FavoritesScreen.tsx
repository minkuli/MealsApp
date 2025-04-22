import { View, Text, StyleSheet } from "react-native";
import { MealsList } from "../components/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
import { RootState } from "../store/redux/store";

export const FavoritesScreen = () => {
//   const context = useContext(FavoritesContext);
const favoriteMealIDs = useSelector((state: RootState) => state.favoriteMeals.ids);
//   const favoriteMeals = MEALS.filter((meal) => context.ids.includes(meal.id));

const favoriteMeals = MEALS.filter((meal) => favoriteMealIDs.includes(meal.id));
  if(favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No favorite meals yet. Start adding some!</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
