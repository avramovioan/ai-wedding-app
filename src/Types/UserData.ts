import { Database } from "../database.types";
import { DrinkData } from "./DrinkData";

export type UserData = Database["public"]["Tables"]["user"];

export type UserDataWithDrinkData = Omit<UserData["Row"], "drink_choices"> & {
  drink_choices: DrinkData["Row"][];
};
