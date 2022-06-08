/**
 * @param {number[][]} points
 * @return {boolean}
 */
 var isBoomerang = function(points) {
     //判断三点构成的三角形是否为0
    const [x1,y1] =points[0],[x2,y2]=points[1],[x3,y3]=points[2];
    return (x1*y2-x2*y1)+(x2*y3-x3*y2)+(x3*y1-x1*y3)!==0;
};