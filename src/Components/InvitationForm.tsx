import { useAsync } from "@m1st1ck/useasync";
import { useEffect, useState } from "react";
import { getDrinks } from "../Services/drinkService";
import { DrinkData } from "../Types/DrinkData";
import { UserDataWithDrinkData, UserData } from "../Types/UserData";
import IndividualForm from "./IndividualForm";

export default function InvitationForm() {
  const [formData, setFormData] = useState<{
    [userId: number]: UserDataWithDrinkData;
  }>({});

  //const [drinks, setDrinks] = useState<DrinkData["Row"][]>([]);
  //const [hasError, setHasError] = useState(false);
  const [, getDrinksStatus, getDrinksResponse] = useAsync(getDrinks, {
    runOnMountArgs: [],
  });
  const drinks = getDrinksResponse || [];

  function updateFormData(id: number) {
    return (
      getNext: (prev: UserDataWithDrinkData) => UserDataWithDrinkData
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
      wants_vegetarian: false,
      wants_kid_menu: false,
    },
    {
      id: 2,
      name: "Not Gosho",
      alergies: null,
      is_coming: false,
      drink_choices: [],
      is_child: false,
      wants_vegetarian: false,
      wants_kid_menu: false,
    },
    {
      id: 3,
      name: "Pesho",
      alergies: null,
      is_coming: false,
      drink_choices: [],
      is_child: false,
      wants_vegetarian: false,
      wants_kid_menu: false,
    },
  ];

  useEffect(() => {
    const drinks = getDrinksResponse || [];
    setFormData(
      users.reduce<{
        [userId: number]: UserDataWithDrinkData;
      }>((acc, value) => {
        return {
          ...acc,
          [value.id]: {
            ...value,
            drink_choices: value.drink_choices.map(
              (dr) => drinks.find((d) => d.id == dr)!
            ),
          },
        };
      }, {})
    );
  }, [getDrinksResponse]);

  return (
    <div>
      <div className="flex min-h-screen flex-col items-center bg-gray-50 pt-6 sm:justify-center sm:pt-0">
        <div className="mt-6 w-full overflow-hidden px-6 py-4 sm:max-w-md">
          {getDrinksStatus.loaded && (
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
                  updateFormData={updateFormData(u.id)}
                  userData={formData[u.id]}
                />
              ))}
              <div className="mt-4 flex items-center justify-start">
                <button
                  type="submit"
                  className="false inline-flex items-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out active:bg-gray-900"
                >
                  Потвърди
                </button>
              </div>
            </form>
          )}
          {getDrinksStatus.error && <div> Нещо се оплеска. </div>}
        </div>
      </div>
    </div>
  );
}
