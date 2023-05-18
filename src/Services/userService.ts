import { UserData, UserDataWithDrinkAndFoodData } from "../Types/UserData";
import supabase from "./supabaseClient";

export async function getUserGroup(
  guestId: string
): Promise<UserData["Row"][]> {
  const { data, error } = await supabase.functions.invoke("get-users", {
    headers: {
      guest_id: guestId,
    },
  });
  if (error != null) {
    throw error;
  }
  if (data == null) throw new Error("Нещо се обърка с хората.");
  return data;
}

export async function updateUsersGroup(
  users: UserDataWithDrinkAndFoodData[]
): Promise<void> {
  const usersToUpdate: UserData["Update"][] = users.map((user) => {
    return {
      ...user,
      drink_choices: user.drink_choices.map((drink) => drink.id),
      food_choice: user.food_choice.id,
    };
  });
  const { data: updatedUsers, error } = await supabase.functions.invoke(
    "update-users",
    {
      headers: {
        guest_id: users[0].guest_id,
      },
      body: usersToUpdate,
    }
  );
  if (error != null) {
    throw error;
  }
  return;
}
