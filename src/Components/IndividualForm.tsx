import { Listbox, Switch, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { DrinkData } from "../Types/DrinkData";
import { UserDataWithDrinkAndFoodData, UserData } from "../Types/UserData";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { FoodData } from "../Types/FoodData";

export default function IndividualForm({
  drinks,
  foods,
  updateFormData,
  userData,
}: {
  drinks: DrinkData["Row"][];
  foods: FoodData["Row"][];
  updateFormData(
    getNext: (
      prev: UserDataWithDrinkAndFoodData
    ) => UserDataWithDrinkAndFoodData
  ): void;
  userData: UserDataWithDrinkAndFoodData;
}) {
  const [hasAlergies, setHasAlergies] = useState(false);
  return (
    <div className="mb-9 rounded-2xl border border-amber-500 p-2 drop-shadow-md">
      <div>
        <label
          htmlFor="name"
          className="undefined block text-sm font-medium text-white md:text-2xl "
        >
          Име
        </label>
        <div className="flex flex-col items-start">
          <input
            onChange={(evt) => {
              updateFormData((u) => {
                u.name = evt.target.value;
                return u;
              });
            }}
            value={userData.name}
            type="text"
            name="name"
            className="mt-1 block w-full rounded-md border-gray-300 p-2 text-sm shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 md:text-xl"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <label
          htmlFor="email"
          className="undefined block text-sm font-medium  text-white  md:text-2xl"
        >
          Ще присъствам?
        </label>
        <div className="flex flex-col justify-center">
          <Switch
            checked={userData.is_coming}
            onChange={() => {
              updateFormData((u) => {
                u.is_coming = !u.is_coming;
                return u;
              });
            }}
            className={`${
              userData.is_coming ? "bg-amber-500" : "bg-black"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                userData.is_coming ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
      </div>
      {!userData.is_child && (
        <div className="mt-4">
          <label className="undefined block text-sm font-medium text-white md:text-2xl">
            С какво ще се напия:
          </label>
          <div className="flex flex-col items-start">
            <Listbox
              value={userData.drink_choices}
              onChange={(data) => {
                updateFormData((prev) => {
                  prev.drink_choices = data;
                  return prev;
                });
              }}
              multiple
            >
              <div className="relative mt-1 min-w-full">
                <Listbox.Button
                  className="relative w-full cursor-pointer 
                rounded-lg bg-white py-2 pl-3 pr-10 text-left text-sm shadow-md focus:outline-none
                 focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
                  focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 md:text-xl"
                >
                  <span className="block truncate">
                    {userData.drink_choices.length === 0
                      ? "Няма да пия нищо 😞"
                      : userData.drink_choices
                          .map((drink) => drink.name)
                          .join(", ")}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-black"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {drinks.map((drink) => (
                      <Listbox.Option
                        key={drink.id}
                        className={({ active }) =>
                          `relative cursor-pointer select-none py-2 pl-10 pr-4 text-sm md:text-xl ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={drink}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {drink.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
      )}

      <div className="mt-4 flex justify-between">
        <label
          htmlFor="email"
          className="undefined block text-sm font-medium text-white md:text-2xl "
        >
          Имам алергии:
        </label>
        <div className="flex flex-col justify-center">
          <Switch
            checked={hasAlergies}
            onChange={setHasAlergies}
            className={`${
              hasAlergies ? "bg-amber-500" : "bg-black"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                hasAlergies ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
      </div>
      {hasAlergies && (
        <div>
          <label
            htmlFor="name"
            className="undefined block text-sm font-medium text-white md:text-xl"
          >
            Моля избройте алергиите си:
          </label>
          <div className="flex flex-col items-start">
            <input
              onChange={(evt) => {
                updateFormData((u) => {
                  u.alergies = evt.target.value;
                  return u;
                });
              }}
              value={userData.alergies || ""}
              type="text"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 p-2 text-sm shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 md:text-xl"
            />
          </div>
        </div>
      )}

      <div className="mt-4">
        <label className="undefined block text-sm font-medium text-white md:text-2xl">
          Какво ще хапвам:
        </label>
        <div className="flex flex-col items-start">
          <Listbox
            value={userData.food_choice || {}}
            onChange={(data) => {
              updateFormData((prev) => {
                prev.food_choice = data;
                return prev;
              });
            }}
          >
            <div className="relative mt-1 min-w-full">
              <Listbox.Button
                className="relative w-full cursor-pointer 
              rounded-lg bg-white py-2 pl-3 pr-10 text-left text-sm shadow-md 
              focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white
               focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 md:text-xl"
              >
                <span className="block truncate">
                  {userData.food_choice === undefined
                    ? ""
                    : userData.food_choice.name}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {foods.map((food) => (
                    <Listbox.Option
                      key={food.id}
                      className={({ active }) =>
                        `relative cursor-pointer select-none py-2 pl-10 pr-4 text-sm md:text-xl ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={food}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {food.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
    </div>
  );
}
