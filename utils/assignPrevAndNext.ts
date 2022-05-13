import type { Data, RequiredData } from "@localTypes/Data";
export default function assignPrevAndNext(arr: Data): RequiredData {
  return arr.map((item, idx, arr) => {
    return {
      ...item,
      next: arr[idx + 1]?.name ?? null,
      prev: arr[idx - 1]?.name ?? null,
    };
  });
}
