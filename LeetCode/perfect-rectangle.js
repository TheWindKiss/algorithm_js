/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function (rectangles) {
    let areaSum = 0;
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    let set = new Set();
    for (let [x1, y1, x2, y2] of rectangles) {
        minX = Math.min(x1, minX);
        minY = Math.min(y1, minY);
        maxX = Math.max(x2, maxX);
        maxY = Math.max(y2, maxY);
        let area = (x2 - x1) * (y2 - y1);
        areaSum += area;
        const points = [`${x1},${y1}`, `${x1},${y2}`, `${x2},${y1}`, `${x2},${y2}`];
        points.forEach((point) => set.has(point) ? set.delete(point) : set.add(point));
    }
    return areaSum == (maxX - minX) * (maxY - minY) && set.size === 4 && [`${minX},${minY}`, `${minX},${maxY}`, `${maxX},${minY}`, `${maxX},${maxY}`].every((item) => set.has(item));
};
console.log(isRectangleCover([[0, 0, 1, 1], [0, 0, 2, 1], [1, 0, 2, 1], [0, 2, 2, 3]]))