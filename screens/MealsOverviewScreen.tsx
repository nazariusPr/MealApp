import { useLayoutEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsOverviewList from "../components/MealsOverViewList";

type MealsOverviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MealsOverview"
>;

function MealsOverviewScreen({ route, navigation }: MealsOverviewScreenProps) {
  const { id } = route.params;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(id);
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === id
    )?.title;
    navigation.setOptions({
      title: categoryTitle,
      headerBackTitleVisible: false,
    });
  }, [navigation]);
  return <MealsOverviewList meals={displayedMeals} />;
}

export default MealsOverviewScreen;
