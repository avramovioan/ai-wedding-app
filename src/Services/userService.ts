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
    const storedUsers: UserData["Row"][] = JSON.parse(usersJson);
    if (storedUsers.every((user) => user.guest_id === guestId)) {
      console.log("Getting users from storage");
      return storedUsers;
    }
  }
  console.log("Getting users from db");
  const { data, error } = await supabase.functions.invoke("get-users", {
    headers: {
      guest_id: guestId,
    },
  });
  if (error != null) {
    throw error;
  }
  console.log(data);
  if (data == null) throw new Error("Нещо се обърка с хората.");
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
        ...user,
        drink_choices: user.drink_choices.map((drink) => drink.id),
        food_choice: user.food_choice.id,
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
