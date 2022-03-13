function countingSundays(firstYear, lastYear) {
    //获取第一年第一天是星期几
    let firstDay = getFirstDay(firstYear);
    let ans = 0;
    for (let i = firstYear; i <= lastYear; i++) {
        for (let j = 0; j < 12; j++) {
            if (firstDay % 7 == 0) ans++;
            firstDay += getMonthDays(j, i);
        }
    }
    return ans;
}

const isLeapYear = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 == 0)
}
const getMonthDays = (month, year) => {
    switch (month) {
        //国外月份计数从0开始
        case 0: return 31;
        case 1: return isLeapYear(year) ? 29 : 28;
        case 2: return 31;
        case 3: return 30;
        case 4: return 31;
        case 5: return 30;
        case 6: return 31;
        case 7: return 31;
        case 8: return 30;
        case 9: return 31;
        case 10: return 30;
        case 11: return 31;
        default: return new Error('不是正确的月份');
    }
}
const getFirstDay = (firstYear) => {
    let frontDays = 0;
    for (let i = 1900; i < firstYear; i++) {
        frontDays += (isLeapYear(i) ? 366 : 365)
    }
    return frontDays % 7 + 1;
}
console.log(countingSundays(1901, 2000))