import { Database } from "../database.types";
import { DrinkData } from "./DrinkData";
import { FoodData } from "./FoodData";

export type UserData = Database["public"]["Tables"]["user"];

export type UserDataWithDrinkAndFoodData = Omit<
  UserData["Row"],
  "drink_choices" | "food_choice"
> & {
  drink_choices: DrinkData["Row"][];
  food_choice: FoodData["Row"];
};
