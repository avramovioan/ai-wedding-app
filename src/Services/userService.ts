import { UserData, UserDataWithDrinkAndFoodData } from "../Types/UserData";
import supabase from "./supabaseClient";

const SS_USERS = "users";

function cacheUsers(users: UserData["Row"][] | null) {
  if (users === null) return;
  const stringyDrinks = JSON.stringify(users);
  sessionStorage.setItem(SS_USERS, stringyDrinks);
}

export async function getUserGroup(
  guestId: string
): Promise<UserData["Row"][]> {
  const usersJson: string | null = sessionStorage.getItem(SS_USERS);
  if (usersJson !== null && usersJson !== "[]") {
    return JSON.parse(usersJson);
  }
  console.log("Getting group");
  const { data, error } = await supabase
    .from("user")
    .select("*")
    .eq("guest_id", guestId);

  const userUpsertData: any = [];

  let areEqual = (
    incomingData: UserData["Update"][],
    existingData: UserData["Update"][]
  ): boolean => {
    return (
      incomingData.length === existingData.length &&
      incomingData.every((item, _) => {
        const index = existingData.findIndex((i) => i.id === item.id);
        if (index === -1) return false;
        // item.guest_id = existingData[index].guest_id;
        // item.is_child = existingData[index].is_child;
        userUpsertData.push({
          ...item,
          guestId: existingData[index].guest_id,
          is_child: existingData[index].is_child,
        });
        return true;
      })
    );
  };

  if (error != null) {
    throw error;
  }
  console.log(data);
  if (data == null) throw new Error("Нещо се обърка с пиийнито.");
  cacheUsers(data);
  return data;
}

export async function updateGroup(
  users: UserDataWithDrinkAndFoodData[]
): Promise<void> {
  const updatedUsers: UserData["Row"][] = [];
  await Promise.all(
    users.map(async (user) => {
      const userToUpdate: UserData["Update"] = {
        alergies: user.alergies,
        drink_choices: user.drink_choices.reduce<number[]>((acc, val) => {
          acc.push(val.id);
          return acc;
        }, []),
        food_choice: user.food_choice.id,
        is_coming: user.is_coming,
      };
      const { data, error } = await supabase
        .from("user")
        .update({
          ...userToUpdate,
        })
        .eq("id", user.id)
        .select("*");
      if (error != null) throw error;
      updatedUsers.push(data[0]); //expecting only one
    })
  );
  cacheUsers(updatedUsers);
  return;
}
