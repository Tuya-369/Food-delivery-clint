"use client";
import React, { useEffect, useState } from "react";
import cors from "cors";
import { FoodsWithCategories } from "./FoodsWithCategories";

type Categories = {

_id:Number
categoryName:String
createdAt:Number
updatedAt:Number
__v:Number

}

export const FoodCategories = () => {
  const[categories, setCategories] = useState<Categories[]>([]);
  useEffect(() => {
    const getCategories = async () => { 
      const response = await fetch("http://localhost:3001/food-category")
      const data = await response.json();
      console.log("Categorydataa",data);

      setCategories(data)
      
  };
  getCategories();
},[]);
  if (!categories.foodCategories?.length)
    return <p className="text-white">No categories found</p>;
console.log(categories?.foodCategories)
  return (
    <div>
      <div className="flex flex-col my-8 gap-9">
        <div className="text-3xl font-semibold text-white">Categories</div>
        <div className="flex gap-2 flex-nowrap">
          {categories?.foodCategories.map((category) => (
            <div
              key={category._id}
              className="flex items-center px-5 py-1 rounded-full bg-background"
            >
              <div>{category.categoryName}</div>
            </div>
          ))}
        </div>
      </div>
      <FoodsWithCategories />
    </div>
  );
};
