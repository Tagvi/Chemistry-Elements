export function translate(foodName: string) {
  const foodNamesMap: {
    [englishWord: string]: string;
  } = {
    potassium: "კალიუმი",
    calcium: "კალციუმი",
    sodium: "ნატრიუმი",
    phosphorus: "ფოსფორი",
    iodine: "იოდი",
  };
  return foodNamesMap[foodName];
}
