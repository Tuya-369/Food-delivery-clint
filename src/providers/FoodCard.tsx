"use client"
import { FoodCard } from "@/components/food";
import { FoodCartContextType, FoodType } from "@/constants/Type";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { createContext } from "react";
type FoodCardContextType = {
    FoodCard:{ food: FoodType; quantity:number }[];
    setFoodCart:Dispatch<SetStateAction<{food:FoodType;quantity:number}[]>>
}
export const FoodCartContext =  createContext<FoodCardContextType>(
    {} as FoodCardContextType
);

export default function FoodCardContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {

const [foodCart, setFoodCart] = useState<{food:FoodType, quantity:number}[]>([]);

useEffect(() => {
    const cartItem = localStorage.getItem("foodCart");
    if (cartItem) {setFoodCart(JSON.parse(cartItem) || [])};
},[]);
   useEffect(() => {

    if (foodCart)localStorage.setItem("foodCart", JSON.stringify(foodCart));
}, [foodCart]); 

    return (
        <FoodCartContext.Provider value={{ foodCart, setFoodCart }}>
            {children}
        </FoodCartContext.Provider>
    );
}