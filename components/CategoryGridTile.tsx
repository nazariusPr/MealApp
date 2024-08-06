import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Platform,
} from "react-native";

type CategoryGridTileProps = {
  title: string;
  color: string;
  onPress: () => void;
};

function CategoryGridTile({ title, color, onPress }: CategoryGridTileProps) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

type Styles = {
  gridItem: ViewStyle;
  button: ViewStyle;
  buttonPressed: ViewStyle;
  innerContainer: ViewStyle;
  title: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 8,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
