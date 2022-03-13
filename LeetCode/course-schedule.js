/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let edges = new Array(numCourses).fill(0).map(x => new Array().fill(0));
    for (const info of prerequisites) {
        edges[info[1]].push(info[0])
    }
    const visited = new Array(numCourses).fill(0);
    let valid = true;
    const dfs = function (i) {
        visited[i] = 1;
        for (let v of edges[i]) {
            if (visited[v] == 0) {
                dfs(v);
                if (!valid) {
                    return
                }
            } else if (visited[v] == 1) {
                valid = false;
                return;
            }
        }
        visited[i] = 2;
    }
    for (let i = 0; i < numCourses && valid; i++) {
        if (visited[i] == 0) {
            dfs(i)
        }
    }
    return valid;
};

console.log(canFinish(2, [[1, 0]]))