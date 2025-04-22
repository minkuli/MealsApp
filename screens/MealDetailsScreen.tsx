import { useLayoutEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealDetails } from "../components/MealDetails";
import { Subtitle } from "../components/MealDetail/Subtitle";
import { List } from "../components/MealDetail/List";
import { IconButton } from "../components/IconButton";
// import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
import type { RootState } from "../store/redux/store";

interface MealDetailsScreenProps {
  route: any;
  navigation: any;
}

export const MealDetailsScreen = (props: MealDetailsScreenProps) => {
  const dispatch = useDispatch();
  const { route, navigation } = props;
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMealIDs = useSelector((state: RootState) => state.favoriteMeals.ids);
  // const mealIsFavorite = favoriteMealsContext.ids.includes(mealId);
  const mealIsFavorite = favoriteMealIDs.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      // favoriteMealsContext.removeFavorite(mealId);
      dispatch(removeFavorite({id: mealId}));
    } else {
      // favoriteMealsContext.addFavorite(mealId);
      dispatch(addFavorite({id: mealId}));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton name={mealIsFavorite ? "star" : "star-outline"} color="white" onPress={changeFavoriteStatusHandler} />;
      }
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <View>
        <MealDetails
          duration={selectedMeal?.duration || 0}
          complexity={selectedMeal?.complexity || ""}
          affordability={selectedMeal?.affordability || ""}
          textStyle={styles.detailsText}
        />
      </View>
      <View style={styles.listOuterContainer}>
      <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal?.ingredients || []} />
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal?.steps || []} />
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginBottom: 32
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    margin: 8,
  },
  detailsText: { color: "white" },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
    },
});
