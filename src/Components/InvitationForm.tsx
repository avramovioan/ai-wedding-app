import { useAsync } from "@m1st1ck/useasync";
import { useEffect, useState } from "react";
import { getDrinks } from "../Services/drinkService";
import { getFoods } from "../Services/foodService";
import { DrinkData } from "../Types/DrinkData";
import { FoodData } from "../Types/FoodData";
import { UserDataWithDrinkAndFoodData, UserData } from "../Types/UserData";
import IndividualForm from "./IndividualForm";

export default function InvitationForm() {
  const [formData, setFormData] = useState<{
    [userId: number]: UserDataWithDrinkAndFoodData;
  }>({});

  //const [drinks, setDrinks] = useState<DrinkData["Row"][]>([]);
  //const [hasError, setHasError] = useState(false);
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

  const users: UserData["Row"][] = [
    {
      id: 1,
      name: "Gosho",
      alergies: null,
      is_coming: false,
      drink_choices: [],
      is_child: false,
      food_choice: null,
      guest_id: "123",
    },
    // {
    //   id: 2,
    //   name: "Not Gosho",
    //   alergies: null,
    //   is_coming: false,
    //   drink_choices: [],
    //   is_child: false,
    //   food_choice: null,
    // },
    // {
    //   id: 3,
    //   name: "Pesho",
    //   alergies: null,
    //   is_coming: false,
    //   drink_choices: [],
    //   is_child: true,
    //   food_choice: null,
    // },
    // {
    //   id: 4,
    //   name: "Pesho",
    //   alergies: null,
    //   is_coming: false,
    //   drink_choices: [],
    //   is_child: true,
    //   food_choice: null,
    // },
    // {
    //   id: 5,
    //   name: "Pesho",
    //   alergies: null,
    //   is_coming: false,
    //   drink_choices: [],
    //   is_child: true,
    //   food_choice: null,
    // },
    // {
    //   id: 6,
    //   name: "Pesho",
    //   alergies: null,
    //   is_coming: false,
    //   drink_choices: [],
    //   is_child: true,
    //   food_choice: null,
    // },
    // {
    //   id: 7,
    //   name: "Pesho",
    //   alergies: null,
    //   is_coming: false,
    //   drink_choices: [],
    //   is_child: true,
    //   food_choice: null,
    // },
  ];

  function getDefaultFood(
    user: UserData["Row"],
    foods: FoodData["Row"][]
  ): FoodData["Row"] {
    return user.is_child
      ? foods.find((f) => f.for_child)!
      : foods.find((f) => !f.for_child)!;
  }

  useEffect(() => {
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
              value.drink_choices === null
                ? []
                : value.drink_choices.map(
                    (dr) => drinks.find((d) => d.id == dr)!
                  ),
            food_choice:
              value.food_choice === null
                ? getDefaultFood(value, foods)
                : foods.find((food) => food.id == value.id)!,
          },
        };
      }, {})
    );
  }, [getDrinksResponse, getFoodsRespnse]);

  return (
    <div>
      <div className="flex flex-col items-center rounded-lg bg-[#1d2e28]">
        <div className="w-full px-2 md:py-4">
          {getDrinksStatus.loaded && getFoodsStatus.loaded && (
            <form
              onSubmit={(evt) => {
                evt.preventDefault();
                console.log(formData);
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
          {(getDrinksStatus.error || getFoodsStatus.error) && (
            <div> Нещо се оплеска. </div>
          )}
        </div>
      </div>
    </div>
  );
}
