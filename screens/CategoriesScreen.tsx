import { FlatList, StyleSheet, SafeAreaView, ViewStyle } from "react-native";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CATEGORIES } from "../data/dummy-data";
import { Category } from "../types/category";
import { RootStackParamList, RootDrawerParamList } from "../App";
import CategoryGridTile from "../components/CategoryGridTile";

type CategoriesScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<RootDrawerParamList, "Categories">,
  NativeStackNavigationProp<RootStackParamList>
>;

type CategoriesScreenRouteProp = RouteProp<RootDrawerParamList, "Categories">;

type CategoriesScreenProps = {
  navigation: CategoriesScreenNavigationProp;
  route: CategoriesScreenRouteProp;
};

function CategoriesScreen({ navigation }: CategoriesScreenProps) {
  function renderCategoryItem({ id, title, color }: Category) {
    function pressHandler() {
      navigation.navigate("MealsOverview", { id });
    }
    return (
      <CategoryGridTile title={title} color={color} onPress={pressHandler} />
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderCategoryItem(itemData.item)}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

export default CategoriesScreen;

type Styles = {
  screen: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  screen: {
    flex: 1,
  },
});
