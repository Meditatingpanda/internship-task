interface dict {
  [key: string]: number;
}
interface dict2 {
  [key: string]: number;
}
const obj: dict = {
  "2020-01-01": 4,
  "2020-01-02": 4,
  "2020-01-03": 3,
  "2020-01-04": 8,
  "2020-01-05": 2,
  "2020-01-06": -6,
  "2020-01-07": 2,
  "2020-01-08": -2,
};
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
  const days: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
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
};
helperFunction();
for(const key in obj2){
    console.log(key, obj2[key])
}