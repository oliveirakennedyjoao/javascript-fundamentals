const array1 = [1, 2, 3, 4];

const shopping_cart = [
  {
    id: "001",
    price: 500,
  },
  {
    id: "002",
    price: 200,
  },
  { id: "002", price: 300 },
];

/**
 * O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array,
 * resultando num único valor de retorno.
 *
 * A função reduce tem como passa como argumantos para o callback
 *
 * 1 - O valor atual resultado do acúmulo do resultado da função callback para cada valor do array;
 * 2 - O valor do índice atual
 * 3 - O índice atual
 * 4 - O array inicial (inalterado)
 */
const totalPrice = shopping_cart.reduce(
  (acc, currentValue, currentIndex, src) => acc + currentValue.price,
  0
);

console.log(totalPrice);
