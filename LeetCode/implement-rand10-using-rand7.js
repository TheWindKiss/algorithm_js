/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
    var row, col, idx;
    do {
        row = rand7();
        col = rand7();
        //获得一个七进制的数，当这个数大于40时跳出循环。能够跳出循环的10个数概率均匀为1/10
        idx = (row - 1) * 7 + col;
    } while (idx < 40);
    return 1 + (idx - 1) % 10;

};