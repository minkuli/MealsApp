import { createContext, useState } from "react";

export interface FavoritesContextType {
  ids: string[];
  addFavorite: (mealId: string) => void;
  removeFavorite: (mealId: string) => void;
  isFavorite: (mealId: string) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextType>({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => false,
});

interface Props {
  children: React.ReactNode;
}

export const FavoritesContextProvider = ({ children }: Props) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  const addFavorite = (mealId: string) => {
    setFavoriteMealIds((current) => [...current, mealId]);
  };

  const removeFavorite = (mealId: string) => {
    setFavoriteMealIds((current) => current.filter((id) => id !== mealId));
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
    isFavorite: (mealId: string) => favoriteMealIds.includes(mealId),
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
