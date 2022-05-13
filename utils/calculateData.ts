import { RequiredData } from "@localTypes/Data";

function getGrams(want: number, elem: number, g: number) {
  return (want / elem) * g;
}
export function calculateData(
  input: string,
  foods: RequiredData[number]["foods"]
) {
  return foods.map(({ name, elem, g }) => {
    return {
      name,
      grams: getGrams(Number(input), elem, g),
    };
  });
}
