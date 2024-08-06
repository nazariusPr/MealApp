import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

type MealDetailsProps = {
  duration: number;
  complexity: string;
  affordability: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}: MealDetailsProps) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

type Styles = {
  details: ViewStyle;
  detailItem: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  details: {
    borderRadius: 8,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  detailItem: { marginHorizontal: 4, fontSize: 12 },
});
