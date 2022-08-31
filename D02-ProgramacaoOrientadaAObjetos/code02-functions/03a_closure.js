// 03a_closure
function somaValores(x) {
   return function(y) {
     return x + y;
   };
 }
 
 var soma5 = somaValores(5);
 
 console.log(soma5(2));
