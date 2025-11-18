import { getPizzas, createPizza, deletePizza } from "./API/pizzas.js";
getPizzas().then((result) => console.log(result));

const addPizza = async () => {
  const newPizza = await createPizza({
    name: "Гавайська",
    price: 179,
    ingredients: ["Соус", "Ананаси", "Курка", "Помідори"],
  });

  console.log(newPizza);
};
addPizza();

deletePizza()