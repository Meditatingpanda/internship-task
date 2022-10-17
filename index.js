//dictinary having all the days
// const obj: dict = {
//   "2020-01-01": 4,
//   "2020-01-02": 4,
//   "2020-01-03": 6,
//   "2020-01-04": 8,
//   "2020-01-05": 2,
//   "2020-01-06": -6,
//   "2020-01-07": 2,
//   "2020-01-08": -2,
// };
//dictionary having some days missing
var obj = {
    "2020-01-01": 6,
    "2020-01-04": 12,
    "2020-01-05": 14,
    "2020-01-06": 2,
    "2020-01-07": 4,
};
var obj2 = {
    Mon: 0,
    Tue: 0,
    Wed: 0,
    Thu: 0,
    Fri: 0,
    Sat: 0,
    Sun: 0,
};
var returnDay = function (day) {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
};
var findDay = function (day) {
    var dt = new Date(day);
    return dt.getDay();
};
var helperFunction = function () {
    for (var key in obj) {
        var day = findDay(key);
        var dayName = returnDay(day);
        obj2[dayName] += obj[key];
    }
    var keysOfObj2 = Object.keys(obj2);
    var midPoint = Math.floor(keysOfObj2.length / 2);
    if (obj2[keysOfObj2[midPoint]] === 0) {
        obj2[keysOfObj2[midPoint]] =
            (obj2[keysOfObj2[0]] + obj2[keysOfObj2[keysOfObj2.length - 1]]) / 2;
    }
    keysOfObj2.forEach(function (key, i) {
        if (obj2[key] === 0) {
            obj2[key] = (obj2[keysOfObj2[i - 1]] + obj2[keysOfObj2[i + 1]]) / 2;
        }
    });
};
helperFunction();
for (var key in obj2) {
    console.log(key, obj2[key]);
}
