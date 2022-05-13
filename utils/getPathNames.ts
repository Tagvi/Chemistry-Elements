import { RequiredData } from "@localTypes/Data";

export function getPathNames(data: RequiredData) {
  return data.map((food) => ({
    params: {
      food: food.name,
    },
  }));
}
