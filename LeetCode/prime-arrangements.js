/**
 * @param {number} n
 * @return {number}
 */
 const MOD = BigInt(1e9+7);
 var numPrimeArrangements = function(n) {
     //js的Number类型有点弱，需要注意
     if(n==1||n==2)return 1;
     if(n==3)return 2;
     let cnt=0;
     for(let i=2;i<=n;i++){
         if(isPrime(i))cnt++;
     }
     return factorial(cnt)*factorial(n-cnt)%MOD;
 };
 const factorial=(n)=>{
     let res=1n;
     for(let i=BigInt(n);i>0;i--){
         res*=i;
         res%=MOD;
     }
     return res;
 }
 const isPrime=(n)=>{
         if (n === 1) {
         return false;
     }
     for (let i = 2; i * i <= n; i++) {
         if (n % i === 0) {
             return false;
         }
     }
     return true;
 }