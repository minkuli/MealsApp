import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { MealDetails } from "./MealDetails";

interface MealItemProps {
  id: string;
  title: string;
  duration: number;
  complexity: string;
  affordability: string;
  imageUrl: string;
}

type RootstackParamList = {
  MealDetails: { mealTitle: string; mealId: string };
};
type NavigationProp = StackNavigationProp<RootstackParamList, "MealDetails">;

export const MealItem = (props: MealItemProps) => {
  const { id, title, imageUrl, duration, complexity, affordability } = props;
  const navigation = useNavigation<NavigationProp>();

  const onSelect = () => {
    navigation.navigate("MealDetails", { mealTitle: title, mealId: id });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onSelect}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
