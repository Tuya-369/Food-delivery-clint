"use client"
import { FoodCartContextType, FoodType } from "@/constants/food";
import React, { Dispatch, SetStateAction, useState } from "react";
import { createContext } from "react";
type FoodCardContextType = {
    foodCart:{ food: FoodType; quantity:number }[];
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

    return (
        <FoodCartContext.Provider value={{ foodCart, setFoodCart }}>
            {children}
        </FoodCartContext.Provider>
    );
}