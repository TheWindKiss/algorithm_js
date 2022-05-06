function squareRootConvergents(n) {
    //模拟总结规律
    let den = 1n, mol = 1n, cnt = 0;
    for (let i = 0; i < n; i++) {
        let pre = den;
        den = pre + mol;
        mol = den + pre;
        if (String(den).length < String(mol).length) {
            cnt++;
        }
    }

    return cnt;
}
console.log(squareRootConvergents(1000))