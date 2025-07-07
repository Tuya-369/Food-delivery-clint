export type FoodType = {
  _id: string;
  categoryName: string;
  foods: {
    _id: string;
    foodName: string;
    price: number;
    image: string;
    ingredients: string;
  };
};

export type FoodCartItem = {
  food: FoodType;
  quantity: number;
};

export type FoodCartContextType = {
  foodCart: FoodCartItem[];
  setFoodCart: React.Dispatch<React.SetStateAction<FoodCartItem[]>>;
};
