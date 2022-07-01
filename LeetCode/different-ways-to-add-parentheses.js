/**
 * @param {string} expression
 * @return {number[]}
 */
 const map=new Map();
 var diffWaysToCompute = function(expression) {
     if(map.has(expression))return map.get(expression);
     const list =[],n=expression.length;
     for(let i=0;i<n;i++){
         const ch=expression[i];
         if(ch==='+'||ch==='-'||ch=='*'){
             const left=diffWaysToCompute(expression.substring(0,i));
             const right=diffWaysToCompute(expression.substring(i+1,n));
             for(let l of left){
                 for(let r of right){
                     switch(ch){
                         case '+':
                             list.push(eval(l+'+'+r));
                             break;
                         case '-':
                             list.push(l-r);
                             break;
                         case '*':
                             list.push(l*r);
                             break;
                     }
 
                 }
             }
         }
     }
     if(list.length==0)list.push(parseInt(expression));
     map.set(expression,list)
     return list;
 };