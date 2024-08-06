import { useState, useContext, ReactNode, createContext } from "react";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

type NumberProviderProps = {
  children: ReactNode;
};

type FavouriteMealsContextType = {
  favouriteMeals: Meal[];
  addFavouriteMeal: (id: string) => void;
  removeFavouriteMeal: (id: string) => void;
  isFavouriteMeal: (id: string) => boolean;
};

const FavouriteMealsContext = createContext({} as FavouriteMealsContextType);

export function useFavouriteMeal() {
  return useContext(FavouriteMealsContext);
}

export function FavouriteMealsProvider({ children }: NumberProviderProps) {
  const [favouriteMeals, setFavouriteMeals] = useState<Meal[]>([]);

  function addFavouriteMeal(id: string) {
    const meal = MEALS.find((meal) => meal.id === id);
    if (meal) {
      setFavouriteMeals((prev) => [...prev, meal]);
    }
  }

  function removeFavouriteMeal(id: string) {
    setFavouriteMeals((prev) => {
      return prev.filter((meal) => meal.id !== id);
    });
  }

  function isFavouriteMeal(id: string) {
    return favouriteMeals.some((meal) => meal.id === id);
  }

  return (
    <FavouriteMealsContext.Provider
      value={{
        favouriteMeals,
        addFavouriteMeal,
        removeFavouriteMeal,
        isFavouriteMeal,
      }}
    >
      {children}
    </FavouriteMealsContext.Provider>
  );
}
