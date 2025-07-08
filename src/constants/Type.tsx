export type FoodType = {
  _id: string;
  categoryName: string;
  foods: {
    _id: string;
    foodName: string;
    price: number;
    image: string;
    ingredients: string;
    
}
export type food{
  
}

export type FoodCartContextType = {
  foodCart: FoodCartItem[];
  setFoodCart: React.Dispatch<React.SetStateAction<FoodCartItem[]>>;
};
export type categoryType = {
  _id: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
};
}