/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
    const s1 = ["Zero ", "One ", "Two ", "Three ", "Four ", "Five ", "Six ", "Seven ", "Eight ", "Nine ", "Ten ", "Eleven ", "Twelve ", "Thirteen ", "Fourteen ", "Fifteen ", "Sixteen ", "Seventeen ", "Eighteen ", "Nineteen "];
    const s2 = ["Twenty ", "Thirty ", "Forty ", "Fifty ", "Sixty ", "Seventy ", "Eighty ", "Ninety "];
    const convert = (num) => {
        if (num >= 1000000000) return convert(Math.floor(num / 1000000000)) + "Billion " + convert(num % 1000000000);
        if (num >= 1000000) return convert(Math.floor(num / 1000000)) + "Million " + convert(num % 1000000);
        if (num >= 1000) return convert(Math.floor(num / 1000)) + "Thousand " + convert(num % 1000);
        if (num >= 100) return convert(Math.floor(num / 100)) + "Hundred " + convert(num % 100);
        if (num == 0) return "";
        if (num <= 19) return s1[num];
        if (num % 10 == 0) return s2[Math.floor(num / 10) - 2];
        return s2[Math.floor(num / 10) - 2] + s1[num % 10];
    }
    if (num == 0) return "Zero";
    return convert(num).trim();
};
console.log(numberToWords(1200030000))