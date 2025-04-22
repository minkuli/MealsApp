import { View, Text, StyleSheet } from "react-native";

interface MealDetailsProps {
  duration: number;
  complexity: string;
  affordability: string;
  style?: object;
  textStyle?: object;
}

export const MealDetails = (props: MealDetailsProps) => {
  const { duration, complexity, affordability, style, textStyle } = props;
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailsItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailsItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  detailsItem: {
    fontSize: 16,
    marginHorizontal: 10,
  },
});
