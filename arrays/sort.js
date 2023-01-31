const words = ["café", "Escada", "água", "Câmera", "Ar Condicionado", "Arco"];
const numbers = [8, 100, -1, 0, -500, 1237];

const sortedWords = words.sort(compareWordsFn);

console.log(sortedWords);

const sortedNumbers = numbers.sort(inverseFn);

console.log(sortedNumbers);

/**
 * Comparing a against b, the compare function must:
 *
 * RETURN -> a value less than 0 if a comes before b
 * RETURN -> a value greater than 0 if a comes after b
 * RETURN -> 0, if they have the same.
 */

function compareWordsFn(firstElement, secondElement) {
  return firstElement.localeCompare(secondElement, "pt-BR", {
    caseFirst: "upper",
  });
}

function inverseFn(firstElement, secondElement) {
  //   if (firstElement < secondElement) return 1;
  //   if (firstElement > secondElement) return -1;
  //   return 0;
  return secondElement - firstElement;
}
