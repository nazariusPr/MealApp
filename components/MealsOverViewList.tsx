import { View, StyleSheet, FlatList, ViewStyle } from "react-native";
import { MealItemProps } from "./MealItem";
import Meal from "../models/meal";
import MealItem from "./MealItem";
type MealsOverviewListProps = {
  meals: Meal[];
};

function MealsOverviewList({ meals }: MealsOverviewListProps) {
  function renderMealItem(mealItem: Meal) {
    const mealItemProps: MealItemProps = {
      id: mealItem.id,
      title: mealItem.title,
      imageUrl: mealItem.imageUrl,
      duration: mealItem.duration,
      complexity: mealItem.complexity,
      affordability: mealItem.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={meals}
        keyExtractor={(mealItem) => mealItem.id}
        renderItem={(itemData) => renderMealItem(itemData.item)}
      />
    </View>
  );
}

export default MealsOverviewList;

type Styles = {
  screen: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  screen: {
    flex: 1,
  },
});
