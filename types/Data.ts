export type Data = {
  next?: null | string;
  prev?: null | string;
  name: string;
  text: string;
  foods: { name: string; elem: number; g: number }[];
}[];
export type RequiredData = Required<Data[number]>[];
