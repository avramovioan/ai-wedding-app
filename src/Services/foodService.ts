import { FoodData } from "../Types/FoodData";
import supabase from "./supabaseClient";

const SS_FOODS = "foods";

function cacheFoods(foods: FoodData["Row"][] | null) {
  if (foods === null) return;
  const stringyFoods = JSON.stringify(foods);
  sessionStorage.setItem(SS_FOODS, stringyFoods);
}

export async function getFoods(): Promise<FoodData["Row"][]> {
  return [
    {
      id: 1,
      name: "Chicken",
      description: "Chicken breasts with heavy cream and mushrooms",
      for_adult: true,
      for_child: true,
    },
    {
      id: 2,
      name: "Vegetarian",
      description: "Some vegetables that mostly noone wants to eat.",
      for_adult: true,
      for_child: false,
    },
    {
      id: 3,
      name: "Kid's menu",
      description: "Leftovers from the rest of the menu",
      for_adult: false,
      for_child: true,
    },
  ];
  //   const foodsJson: string | null = sessionStorage.getItem(SS_FOODS);
  //   if (foodsJson) {
  //     return JSON.parse(foodsJson);
  //   }
  //   const { data, error } = await supabase.from("food").select();
  //   if (error != null) {
  //     throw error;
  //   }
  //   if (data == null) throw new Error("Нещо се обърка с манджата.");
  //   cacheFoods(data);
  //   return data;
}
