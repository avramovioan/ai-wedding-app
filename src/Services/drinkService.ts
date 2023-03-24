import { DrinkData } from "../Types/DrinkData";
import supabase from "./supabaseClient";

const SS_DRINKS = "drinks";

function cacheDrinks(drinks: DrinkData["Row"][] | null) {
  if (drinks === null) return;
  const stringyDrinks = JSON.stringify(drinks);
  sessionStorage.setItem(SS_DRINKS, stringyDrinks);
}

export async function getDrinks(): Promise<DrinkData["Row"][]> {
  return [
    {
      id: 1,
      name: "Vodka",
    },
    {
      id: 2,
      name: "Rakia",
    },
    {
      id: 3,
      name: "Whiskey",
    },
  ];
  //   const drinksJson: string | null = sessionStorage.getItem(SS_DRINKS);
  //   if (drinksJson) {
  //     return JSON.parse(drinksJson);
  //   }
  //   const { data, error } = await supabase.from("drink").select();
  //   if (error != null) {
  //     throw error;
  //   }
  //   if (data == null) throw new Error("Нещо се обърка с пиийнито.");
  //   cacheDrinks(data);
  //   return data;
}
