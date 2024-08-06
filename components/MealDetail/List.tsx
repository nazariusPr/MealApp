import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

type ListProps = {
  data: string[];
};

function List({ data }: ListProps) {
  return (
    <>
      {data.map((dataPoint, index) => (
        <View key={index} style={styles.listItem}>
          <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
      ))}
    </>
  );
}

export default List;

type Styles = {
  listItem: ViewStyle;
  itemText: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
