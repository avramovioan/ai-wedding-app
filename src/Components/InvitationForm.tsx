import { useAsync } from "@m1st1ck/useasync";
import { useEffect, useState } from "react";
import { getDrinks } from "../Services/drinkService";
import { getFoods } from "../Services/foodService";
import { UserDataWithDrinkAndFoodData, UserData } from "../Types/UserData";
import IndividualForm from "./IndividualForm";
import { getUserGroup, updateUsersGroup } from "../Services/userService";
import { useLocation } from "react-router-dom";

export default function InvitationForm() {
  const [formData, setFormData] = useState<{
    [userId: number]: UserDataWithDrinkAndFoodData;
  }>({});

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const guestId = queryParams.get("guestId");

  const [, getUsersStatus, getUsersResponse] = useAsync(getUserGroup, {
    runOnMountArgs: [guestId!],
  });
  //const users = getUsersResponse || [];

  const [, getDrinksStatus, getDrinksResponse] = useAsync(getDrinks, {
    runOnMountArgs: [],
  });
  const drinks = getDrinksResponse || [];

  const [, getFoodsStatus, getFoodsRespnse] = useAsync(getFoods, {
    runOnMountArgs: [],
  });
  const foods = getFoodsRespnse || [];

  function updateFormData(id: number) {
    return (
      getNext: (
        prev: UserDataWithDrinkAndFoodData
      ) => UserDataWithDrinkAndFoodData
    ) => {
      setFormData((prev) => {
        return {
          ...prev,
          [id]: getNext({
            ...prev[id],
          }),
        };
      });
    };
  }

  useEffect(() => {
    const users = getUsersResponse || [];
    const drinks = getDrinksResponse || [];
    const foods = getFoodsRespnse || [];
    setFormData(
      users.reduce<{
        [userId: number]: UserDataWithDrinkAndFoodData;
      }>((acc, value) => {
        return {
          ...acc,
          [value.id]: {
            ...value,
            drink_choices:
              value.drink_choices === null || drinks.length === 0
                ? []
                : value.drink_choices.map(
                    (dr) => drinks.find((d) => d.id == dr)!
                  ),
            food_choice:
              value.food_choice === null
                ? foods.find((f) => f.id == 1)!
                : foods.find((food) => food.id === value.food_choice)!,
          },
        };
      }, {})
    );
  }, [getDrinksResponse, getFoodsRespnse, getUsersResponse]);

  return (
    <div>
      <div className="flex flex-col items-center rounded-lg bg-[#1d2e28]">
        <div className="w-full px-2 md:py-4">
          {getDrinksStatus.loaded &&
            getFoodsStatus.loaded &&
            getUsersStatus.loaded && (
              <form
                onSubmit={(evt) => {
                  evt.preventDefault();
                  //console.log(formData);
                  updateUsersGroup(Object.values(formData));
                }}
              >
                {Object.values(formData).map((u) => (
                  <IndividualForm
                    key={u.id}
                    drinks={drinks}
                    foods={
                      u.is_child
                        ? foods.filter((f) => f.for_child)
                        : foods.filter((f) => f.for_adult)
                    }
                    updateFormData={updateFormData(u.id)}
                    userData={formData[u.id]}
                  />
                ))}
                <div className="mb-4 flex items-center justify-start">
                  <button
                    type="submit"
                    className="false inline-flex items-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out active:bg-gray-900 md:text-lg"
                  >
                    Потвърди
                  </button>
                </div>
              </form>
            )}
          {(getDrinksStatus.error ||
            getFoodsStatus.error ||
            getUsersStatus.error) && <div> Нещо се оплеска. </div>}
        </div>
      </div>
    </div>
  );
}
