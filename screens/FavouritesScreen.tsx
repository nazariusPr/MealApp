import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { useFavouriteMeal } from "../contex/FavouriteMealsContext";
import MealsOverviewList from "../components/MealsOverViewList";

function FavouritesScreen() {
  const { favouriteMeals } = useFavouriteMeal();
  return favouriteMeals.length > 0 ? (
    <MealsOverviewList meals={favouriteMeals} />
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>There is no your favourite meal yet...</Text>
    </View>
  );
}

export default FavouritesScreen;

type Styles = {
  container: ViewStyle;
  text: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    top: "30%",
    marginHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 18,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    paddingHorizontal: 40,
    paddingVertical: 95,
  },
});
