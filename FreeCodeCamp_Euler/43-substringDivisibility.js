const DIVISIONS = [2, 3, 5, 7, 11, 13, 17, 19]

function substringDivisibility(n) {
    let sum = 0;
    const numPermutations = factorial(n + 1);
    let permutation = Array(n + 1).fill(0).map((_, index) => index);
    for (let i = 0; i < numPermutations; i++) {
        if (testDivisibility(permutation, n))
            sum += parseInt(permutation.join(""));
        permutation = permuteDigits(permutation);
    }
    return sum;
}
function factorial(num) {
    return num <= 1 ? 1 : num * factorial(num - 1);
}
const permuteDigits = (elements) => {
    //按字典顺序生成，这个好，大有收获
    let len = elements.length;
    for (let i = len - 1; i >= 0; i--) {
        if (elements[i] < elements[i + 1]) {
            for (let j = len - 1; j > i; j--) {
                if (elements[i] < elements[j]) {
                    [elements[i], elements[j]] = [elements[j], elements[i]];
                    const swapRange = (len - i - 1) / 2;
                    for (let k = 1; k <= swapRange; k++) {
                        [elements[i + k], elements[len - k]] = [elements[len - k], elements[i + k]]
                    }
                    return elements;
                }
            }
        }
    }
}
const testDivisibility = (elements, n) => {
    for (let i = 0; i < n - 2; i++) {
        let threeDigits = 100 * elements[i + 1] + 10 * elements[i + 2] + elements[i + 3];
        if (threeDigits % DIVISIONS[i] !== 0)
            return false;
    }
    return true;
}
console.log(substringDivisibility(5))