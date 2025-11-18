import { BASE_URL } from "./config.js";

export const getPizzas = async () => {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) throw new Error(`Error ${response.statusText}`);

    const pizzas = await response.json();
    return pizzas;
  } catch (error) {
    console.log(`Не вдалось отримати список елементів ${error}`);
    return [];
  }
};

export const createPizza = async (pizza) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "applications/json" },
      body: JSON.stringify(pizza),
    });

    if (!response.ok)
      throw new Error(`Не вдалося створити нову піццу ${response.statusText}`);
    const newPizza = await response.json();
    return newPizza;
  } catch (error) {
    console.error(`Не вдалося створити піццу ${error}`);
    return {};
  }
};

export const updatePizza = async (id, pizzaData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pizzaData),
    });

    if (!res.ok) {
      throw new Error(
        `Не вдалося оновити інформацію про піццу ${res.statusText}`
      );
    }

    const updatePizza = await res.json();
    return updatePizza;
  } catch (error) {
    console.log(`Помилка при оновленні інформації. ${error}`);
    return {};
  }
};

export const deletePizza = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok)
      throw new Error(`Невдалося видалити піццу ${response.statusText}`);
    console.log("Піццу видалено!");
  } catch (error) {
    console.log(`Невдалося видалити піццу! ${error}`);
  }
};
