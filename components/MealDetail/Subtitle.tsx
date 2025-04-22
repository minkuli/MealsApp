import { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

interface SubtitleProps {
  children: ReactNode;
}
export const Subtitle = (props: SubtitleProps) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
  },
});
