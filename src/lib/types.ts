export type FoodWithCategoryType = {
  _id: string;
  categoryName: string;
  foods: {
    _id: string;
    foodName: string;
    price: number;
    image: string;
    ingredients: string;
  }[];
};
