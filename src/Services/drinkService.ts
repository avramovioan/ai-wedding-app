import { DrinkData } from "../Types/DrinkData";
import { UserData } from "../Types/UserData";
import supabase from "./supabaseClient";

const SS_DRINKS = "drinks";

function cacheDrinks(drinks: DrinkData["Row"][] | null) {
  if (drinks === null) return;
  const stringyDrinks = JSON.stringify(drinks);
  sessionStorage.setItem(SS_DRINKS, stringyDrinks);
}

export async function getDrinks(): Promise<DrinkData["Row"][]> {
  // return [
  //   {
  //     id: 1,
  //     name: "Vodka",
  //   },
  //   {
  //     id: 2,
  //     name: "Rakia",
  //   },
  //   {
  //     id: 3,
  //     name: "Whiskey",
  //   },
  // ];
  const drinksJson: string | null = sessionStorage.getItem(SS_DRINKS);
  if (drinksJson !== null && drinksJson !== "[]") {
    return JSON.parse(drinksJson);
  }
  console.log("Getting drinks");
  const { data, error } = await supabase.from("drink").select("*");
  if (error != null) {
    throw error;
  }
  console.log(data);
  if (data == null) throw new Error("Нещо се обърка с пиийнито.");
  cacheDrinks(data);
  return data;
}
