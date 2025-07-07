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
}
 export type FoodCartContextType = {
    foodCart: {
        food: FoodType;
        quantity: number;
    }[];
    setFoodCart: {
        food: FoodType;
        quantity: number;
    nul: any;
    valiable:string
}}
