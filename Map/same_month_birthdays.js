let birthMonthMap, birthYear;
let birthYearMap = new Map();

birthYearMap.set(1992, new Map())
birthYearMap.set(1993, new Map())

for (let index = 1; index <= 50; index++) {
    let getYear = Math.floor(Math.random() * 10) % 2;

    if (getYear == 0) {
        birthYear = 1992;
    }
    else if (getYear == 1) {
        birthYear = 1993;
    }

    birthMonthMap = birthYearMap.get(birthYear)
    let person = index;
    let birthMonth = (Math.floor(Math.random() * 100) % 12) + 1;
    if (birthMonthMap.has(birthMonth)) {
        let sameBirthdayMonthArray = birthMonthMap.get(birthMonth);
        sameBirthdayMonthArray.push(person);
        birthMonthMap.set(birthMonth, sameBirthdayMonthArray);
    }
    else {
        let sameBirthdayMonthArray = new Array();
        sameBirthdayMonthArray.push(person);
        birthMonthMap.set(birthMonth, sameBirthdayMonthArray);
    }
    birthYearMap.set(birthYear, birthMonthMap)
}
console.log("People with same birth month in Year 1992 are: ")
for (let i = 1; i <= 12; i++) {
    if (birthYearMap.get(1992).has(i))
        console.log("Month - " + i + ": ", birthYearMap.get(1992).get(i));
    else
        console.log("Month - " + i + ": " + " none");
}
console.log("People with same birth month in Year 1993 are: ")
for (let i = 1; i <= 12; i++) {
    if (birthYearMap.get(1993).has(i))
        console.log("Month - " + i + ": ", birthYearMap.get(1993).get(i));
    else
        console.log("Month - " + i + ": " + " none");
}