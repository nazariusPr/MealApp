import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ImageStyle,
  TextStyle,
  ViewStyle,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";
import MealDetails from "./MealDetails";

export type MealItemProps = {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
};

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: MealItemProps) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  function selectMealItemHandler() {
    navigation.navigate("MealDetail", { id });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.buttonPressed}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

type Style = {
  mealItem: ViewStyle;
  innerContainer: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  buttonPressed: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
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
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
