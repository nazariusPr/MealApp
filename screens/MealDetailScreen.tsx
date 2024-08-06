import { useLayoutEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageStyle,
  TextStyle,
  ScrollView,
  ViewStyle,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { MEALS } from "../data/dummy-data";
import { useFavouriteMeal } from "../contex/FavouriteMealsContext";
import MealDetails from "../components/MealDetails";
import Meal from "../models/meal";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

type MealDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MealDetail"
>;

function MealDetailScreen({ route, navigation }: MealDetailScreenProps) {
  const mealId = route.params.id;
  const selectedMeal: Meal | undefined = MEALS.find(
    (meal) => meal.id === mealId
  );

  const {
    favouriteMeals,
    addFavouriteMeal,
    removeFavouriteMeal,
    isFavouriteMeal,
  } = useFavouriteMeal();

  function headerButtonPressedHandler() {
    isFavouriteMeal(mealId)
      ? removeFavouriteMeal(mealId)
      : addFavouriteMeal(mealId);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            onPress={headerButtonPressedHandler}
            color={isFavouriteMeal(mealId) ? "#e2b497" : "#fff"}
          />
        );
      },
    });
  }, [navigation, favouriteMeals]);

  if (!selectedMeal) {
    return (
      <View>
        <Text>Meal not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen}>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

type Styles = {
  screen: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  detailText: TextStyle;
  innerContainer: ViewStyle;
  outerContainer: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  screen: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  detailText: {
    color: "#fff",
  },
  outerContainer: {
    alignItems: "center",
  },
  innerContainer: {
    width: "80%",
  },
});
