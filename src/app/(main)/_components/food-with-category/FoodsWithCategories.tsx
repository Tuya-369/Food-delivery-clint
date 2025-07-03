"use client";


import { FoodCard } from "@/components/food";
import { FoodWithCategoryType } from "@/lib/types";
import { useEffect, useState } from "react";

export const FoodsWithCategories = () => {
  const [foodWithCategories,setfoodWithCategories] = useState<FoodWithCategoryType[]>([]);
  useEffect(()=>{
    const getCategories = async ()=>{
    const response = await fetch("http://localhost:3001/food") ;

    const data = await response.json();

    setfoodWithCategories(data.foodWithCategories)

    
    
    }
    getCategories();

  },[])
  console.log(foodWithCategories[0])
  if (!foodWithCategories?.length) return null;

  const nonEmptyCategories = foodWithCategories.filter(
    (category) => category?.foods?.length > 0
  );
  return (
    <div className="flex flex-col gap-6">
      {foodWithCategories?.map((category, index) => (
        <div key={index} className="flex flex-col gap-[54px] rounded-xl">
          <p className="text-3xl font-semibold text-white">
            {category.categoryName}
          </p>
          
          <div className="grid grid-cols-1 mb-5 gap-9 sm:grid-cols-2 lg:grid-cols-3">
            {category?.foods?.map((food) => (
             <FoodCard
                  foodName={food?.foodName}
                  price={food?.price}
                  image={food?.image}
                  ingredients={food?.ingredients}
                  key={food?._id}
                />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};