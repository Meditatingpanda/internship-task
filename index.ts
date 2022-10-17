interface dict {
  [key: string]: number;
}
interface dict2 {
  [key: string]: number;
}
//dictinary having all the days
const obj: dict = {
  "2020-01-01": 4,
  "2020-01-02": 4,
  "2020-01-03": 6,
  "2020-01-04": 8,
  "2020-01-05": 2,
  "2020-01-06": -6,
  "2020-01-07": 2,
  "2020-01-08": -2,
};

//dictionary having some days missing

// const obj: dict = {
//   "2020-01-01": 6,
//   "2020-01-04": 12,
//   "2020-01-05": 14,
//   "2020-01-06": 2,
//   "2020-01-07": 4,
// };
const obj2: dict2 = {
  Mon: 0,
  Tue: 0,
  Wed: 0,
  Thu: 0,
  Fri: 0,
  Sat: 0,
  Sun: 0,
};
const returnDay = (day: number): string => {
  const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
};

const findDay = (day: string): number => {
  const dt = new Date(day);

  return dt.getDay();
};

const helperFunction = (): void => {
  for (const key in obj) {
    const day = findDay(key);
    const dayName = returnDay(day);
    obj2[dayName] += obj[key];
  }
  const keysOfObj2 = Object.keys(obj2);
  keysOfObj2.forEach((key, i) => {
    if (obj2[key] === 0) {
      obj2[key] = (obj2[keysOfObj2[i - 1]] + obj2[keysOfObj2[i + 1]]) / 2;
    }
  });
};
helperFunction();
for (const key in obj2) {
  console.log(key, obj2[key]);
}
